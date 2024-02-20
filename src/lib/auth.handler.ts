import {google} from 'googleapis';

export async function googleAuth() {
    const jwtClient = new google.auth.JWT(
        process.env.CLIENT_EMAIL,
        undefined,
        process.env.PRIVATE_KEY
        ['https://www.googleapis.com/auth/spreadsheets']
    )

    return await jwtClient.authorize();
}