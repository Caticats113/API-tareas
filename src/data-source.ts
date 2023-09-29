import "reflect-metadata"
import { DataSource } from "typeorm"
import { Task, User } from "./entities/Task"

require('dotenv').config();

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: "ep-throbbing-dream-22702550.us-east-2.aws.neon.fl0.io",
    port: 5432, // Default PostgreSQL port
    username: `fl0user`,
    password: 'NxLUac9v7PGJ',
    database: 'database-tareas',
    synchronize: true, // Para Dev
    logging: true, // Para Dev
    entities: [Task, User], // Se requiere incluir cada nueva entidad
    migrations: [],
    subscribers: [],
    ssl: { rejectUnauthorized: false }, // Ignora el error de certificado no confiable
    name: 'default', // Asegúrate de definir el nombre de la conexión
})
