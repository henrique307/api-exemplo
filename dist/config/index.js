"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.config = {
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
};
//# sourceMappingURL=index.js.map