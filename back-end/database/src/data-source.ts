import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Gle018195@",
    database: "site_typescript",
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [],
    subscribers: [],
})
