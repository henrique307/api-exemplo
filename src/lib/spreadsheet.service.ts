import { Injectable } from '@nestjs/common';
import { config } from '../config';
import { google, sheets_v4 } from 'googleapis';
import { CreateUserDto } from 'src/routes/users/dto/create-user.dto';
import { UpdateUserDto } from 'src/routes/users/dto/update-user.dto';
import { now, today } from './time.handler';
import { organizeVisitorGroup, sortVisitor } from './sortVisitors';
import { googleAuth } from './google.auth';

@Injectable()
export class SpreadSheetsService {
    private readonly _sheets = google.sheets({ version: "v4", auth: googleAuth() })
    private readonly _spreadsheet_id = config.google.SPREADSHEET_ID
    private readonly range = "visitors" // page

    async addVisitor(createUserDto: CreateUserDto) {
        const visitor: sheets_v4.Params$Resource$Spreadsheets$Values$Append = {
            spreadsheetId: this._spreadsheet_id,
            range: "visitors",
            valueInputOption: "USER_ENTERED",
            insertDataOption: "INSERT_ROWS",
            requestBody: {
                values: [
                    ["=row() - 1", createUserDto.nome, createUserDto.email, createUserDto.recado, today(), now()]
                ]
            }
        }

        try { await this._sheets.spreadsheets.values.append(visitor) }
        catch (e) { throw e }

        return {message: "Usuário adicionado com sucesso!"};
    }

    async findAll() {
        const request: sheets_v4.Params$Resource$Spreadsheets$Values$Get = {
            spreadsheetId: this._spreadsheet_id,
            range: this.range
        }

        try {
            const response = await this._sheets.spreadsheets.values.get(request)

            return organizeVisitorGroup(response.data.values)
        } catch (e) { throw e }
    }

    async findOne(id: number) {
        if(!(await this.findID(id))) return "ERRO: ID não existe na planilha"

        const request: sheets_v4.Params$Resource$Spreadsheets$Values$Batchget = {
            spreadsheetId: this._spreadsheet_id,
            ranges: [
                `${this.range}!A1:Z1`,
                `${this.range}!A${id + 1}:Z${id + 1}`
            ]
        }

        try {
            const response = await this._sheets.spreadsheets.values.batchGet(request)

            const [keys, visitor] = response.data.valueRanges.map(item => item.values[0])

            return sortVisitor(keys, visitor);
        } catch (e) { throw e }
    }

    async update(id: number, updateUserDto: UpdateUserDto) {
        if(!(await this.findID(id))) return "ERRO: ID não existe na planilha"

        const request: sheets_v4.Params$Resource$Spreadsheets$Values$Update = {
            spreadsheetId: this._spreadsheet_id,
            requestBody: {
                values: [
                    [null, updateUserDto?.nome, updateUserDto?.email, updateUserDto.recado, today(), now()]
                ],
                majorDimension: "ROWS"
            },
            range: `${this.range}!A${id + 1}:Z${id + 1}`,
            valueInputOption: "USER_ENTERED"
        }

        try {
            await this._sheets.spreadsheets.values.update(request)

            return {message: "Valores Alterados com sucesso!"}
        } catch (e) { throw e }
    }

    async remove(id: number) {
        if(!(await this.findID(id))) return "ERRO: ID não existe na planilha"

        try {
            const res = this._sheets.spreadsheets.batchUpdate({
                requestBody: {
                    requests: [
                        {
                            deleteDimension: {
                                range: {
                                    dimension: "ROWS",
                                    startIndex: id,
                                    endIndex: id + 1
                                }
                            }
                        }
                    ]
                },
                spreadsheetId: this._spreadsheet_id
            })

            return {message: "item deletado com sucesso!"};
        } catch (e) { throw e }
    }

    private async findID(id: number) {        
        const request: sheets_v4.Params$Resource$Spreadsheets$Values$Get = {
            spreadsheetId: this._spreadsheet_id,
            range: "visitors!A:A"
        }

        try {
            /* essa loucura toda aqui é necessária porque os valores vem como string[][] ([['id'], ['1']])
             * então estou seprando em um array normal de strings   
             */
            const ids = (await this._sheets.spreadsheets.values.get(request))
                .data.values
                    .toString()
                    .replace(/\]\[/g, "")
                    .split(",")

            return ids.includes(`${id}`)
        } catch (e) { throw e }
    }
}