module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    user_name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  });

  return User;
};
