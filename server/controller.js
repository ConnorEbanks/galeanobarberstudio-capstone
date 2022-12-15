// require("dotenv").config();
// const Sequelize = require("sequelize");

// const { CONNECTION_STRING } = process.env;

// const sequelize = new Sequelize(CONNECTION_STRING, {
//   dialect: "postgres",
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//   },
// });

// module.exports = {
//   seed: (req, res) => {
//     sequelize
//       .query(
//         `
//         drop table if exists services;
//         drop table if exists barber;

//         create table services (
//           service_id serial primary key,
//           service_name varchar
//           );
//           create table barber (
//               barber_name serial primary key,
//               service_id serial not null references services(service_id)
//           );
//             insert into service (service_name)
//             values ('Signature Haircut & Style'),
//             ('Signature Beard Trim'),
//             ('Signature Haircut & Style / Beard Trim'),
//             ('Signature Kids Cuts'),
//             ('VIP Experience'),
//             ('Eyebrows'),
//             ('Designs');

//             insert into barber (service_id);
//         `
//       )
//       .then(() => {
//         console.log("DB seeded!");
//         res.sendStatus(200);
//       })
//       .catch((err) => console.log("error seeding DB", err));
//   },
// };
