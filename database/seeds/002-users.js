const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  return knex('users').truncate()
    .then(() => {
      return knex('users').insert([
        { username: 'usernameGuy101', password: bcrypt.hashSync('Passw0rd', 14), role: 2 },
        { username: 'thatGuy67', password: bcrypt.hashSync('1a2b34d5e6f', 14), role: 1 },
      ])
    })
};
