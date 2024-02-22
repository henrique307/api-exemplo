import { google, sheets_v4 } from "googleapis";
import { config } from "src/config";

export function googleAuth() {

    const jwtClient = new google.auth.JWT(
        config.google.CLIENT_EMAIL,
        undefined,
        config.google.PRIVATE_KEY,
        ["https://www.googleapis.com/auth/spreadsheets"],
        undefined,
    )

    return jwtClient;
}