module.exports = {
  HOST: "localhost",
  USER: "anoop",
  PASSWORD: "root",
  DB: "noisecrm",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
