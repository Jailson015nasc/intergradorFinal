// CONEXÃO BANCO DE DADOS LOS HOTEL
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("db_los", "aluno_medio", "@lunoSenai23.", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

module.exports = sequelize;
