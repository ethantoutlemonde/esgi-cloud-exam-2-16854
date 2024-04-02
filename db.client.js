const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'postgres://db_zdfs_user:T3oIAe4AwA3tcORlIuYNHimfEKBKYs01@dpg-co606mev3ddc73983qtg-a/db_zdfs', // TODO
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;