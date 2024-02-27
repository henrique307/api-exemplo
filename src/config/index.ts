import { config as environmentConfig } from 'dotenv';

environmentConfig()

export const config = {
    application: {
        PORT: process.env.PORT || 3000,
        SECRET: process.env.SECRET
    },
    telegram: {
        PORTFOLIO_BOT: process.env.PORTFOLIO_BOT
    },
    google: {
        CLIENT_EMAIL: process.env.CLIENT_EMAIL,
        PRIVATE_KEY: decodeURIComponent(process.env.PRIVATE_KEY),
        SPREADSHEET_ID: process.env.SPREADSHEET_ID
    }
}