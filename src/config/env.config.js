// import "dotenv/config";

import dotenv from "dotenv";

dotenv.config();

export const env = {
    app_port: process.env.app_port,
    db_uri: process.env.db_uri
}



