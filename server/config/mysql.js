const mysql = require('mysql2/promise'); // mysql
module.exports = {
   connect: async function () {
      return await mysql.createConnection({
         host: 'localhost',
         user: 'root',
         password: '', // Hvis man ikke har sat et password selv skal plingerne være tomme indtil man selv har sat en password i phpmyadmin
         port: '3306', // Dette er databasens port, (Kan også ses i Xampp ud for mysql under port kategorien), vores node servers port er ikke det samme som databasens port.
         database: 'testdatabasenewspage'
      })
   }
}