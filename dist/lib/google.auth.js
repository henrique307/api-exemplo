"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleAuth = void 0;
const googleapis_1 = require("googleapis");
const config_1 = require("../config");
function googleAuth() {
    const jwtClient = new googleapis_1.google.auth.JWT(config_1.config.google.CLIENT_EMAIL, undefined, config_1.config.google.PRIVATE_KEY, ["https://www.googleapis.com/auth/spreadsheets"], undefined);
    return jwtClient;
}
exports.googleAuth = googleAuth;
//# sourceMappingURL=google.auth.js.map