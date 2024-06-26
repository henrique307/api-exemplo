"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpreadSheetsService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("../config");
const googleapis_1 = require("googleapis");
const time_handler_1 = require("./time.handler");
const sortVisitors_1 = require("./sortVisitors");
const google_auth_1 = require("./google.auth");
let SpreadSheetsService = class SpreadSheetsService {
    constructor() {
        this._sheets = googleapis_1.google.sheets({ version: "v4", auth: (0, google_auth_1.googleAuth)() });
        this._spreadsheet_id = config_1.config.google.SPREADSHEET_ID;
        this.range = "visitors";
    }
    async addVisitor(createUserDto) {
        const visitor = {
            spreadsheetId: this._spreadsheet_id,
            range: "visitors",
            valueInputOption: "USER_ENTERED",
            insertDataOption: "INSERT_ROWS",
            requestBody: {
                values: [
                    ["=row() - 1", createUserDto.nome, createUserDto.email, createUserDto.recado, (0, time_handler_1.today)(), (0, time_handler_1.now)()]
                ]
            }
        };
        try {
            await this._sheets.spreadsheets.values.append(visitor);
        }
        catch (e) {
            throw e;
        }
        return { message: "Usuário adicionado com sucesso!" };
    }
    async findAll() {
        const request = {
            spreadsheetId: this._spreadsheet_id,
            range: this.range
        };
        try {
            const response = await this._sheets.spreadsheets.values.get(request);
            return (0, sortVisitors_1.organizeVisitorGroup)(response.data.values);
        }
        catch (e) {
            throw e;
        }
    }
    async findOne(id) {
        if (!(await this.findID(id)))
            return { message: "ERRO: ID não existe na planilha" };
        const request = {
            spreadsheetId: this._spreadsheet_id,
            ranges: [
                `${this.range}!A1:Z1`,
                `${this.range}!A${id + 1}:Z${id + 1}`
            ]
        };
        try {
            const response = await this._sheets.spreadsheets.values.batchGet(request);
            const [keys, visitor] = response.data.valueRanges.map(item => item.values[0]);
            return (0, sortVisitors_1.sortVisitor)(keys, visitor);
        }
        catch (e) {
            throw e;
        }
    }
    async update(id, updateUserDto) {
        if (!(await this.findID(id)))
            return { message: "ERRO: ID não existe na planilha" };
        const request = {
            spreadsheetId: this._spreadsheet_id,
            requestBody: {
                values: [
                    [null, updateUserDto?.nome, updateUserDto?.email, updateUserDto.recado, (0, time_handler_1.today)(), (0, time_handler_1.now)()]
                ],
                majorDimension: "ROWS"
            },
            range: `${this.range}!A${id + 1}:Z${id + 1}`,
            valueInputOption: "USER_ENTERED"
        };
        try {
            await this._sheets.spreadsheets.values.update(request);
            return { message: "Valores Alterados com sucesso!" };
        }
        catch (e) {
            throw e;
        }
    }
    async remove(id) {
        if (!(await this.findID(id)))
            return { message: "ERRO: ID não existe na planilha" };
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
            });
            return { message: "item deletado com sucesso!" };
        }
        catch (e) {
            throw e;
        }
    }
    async findID(id) {
        const request = {
            spreadsheetId: this._spreadsheet_id,
            range: "visitors!A:A"
        };
        try {
            const ids = (await this._sheets.spreadsheets.values.get(request))
                .data.values
                .toString()
                .replace(/\]\[/g, "")
                .split(",");
            return ids.includes(`${id}`);
        }
        catch (e) {
            throw e;
        }
    }
};
exports.SpreadSheetsService = SpreadSheetsService;
exports.SpreadSheetsService = SpreadSheetsService = __decorate([
    (0, common_1.Injectable)()
], SpreadSheetsService);
//# sourceMappingURL=spreadsheet.service.js.map