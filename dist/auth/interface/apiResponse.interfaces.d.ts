export declare class Authenticated {
    message: string;
    token: string;
}
export declare class BadResquest {
    message: string[];
    error: string;
    statusCode: number;
}
export declare class Unauthorized {
    message: string;
    statusCode: number;
}
