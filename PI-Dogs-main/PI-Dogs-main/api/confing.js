const DB_USER = process.env.DB_USER || 'postgres';
const DB_PASSWORD = process.env.DB_PASSWORD || 12345;
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || 5432;
const PORT = process.env.PORT || 3001;
const DB_NAME = process.env.DB_NAME || 'dogs';


module.exports = {
    DB_HOST, DB_NAME, DB_PORT, DB_PASSWORD, PORT, DB_USER
}