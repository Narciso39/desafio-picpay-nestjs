import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
dotenv.config();

export const dataSourceConfig = {
  type: 'mysql',  // Certifique-se de que este tipo está correto de acordo com a versão do TypeORM
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT, 10) || 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,  // Somente em desenvolvimento
};
