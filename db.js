const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./Casa-Criativa.db");

db.serialize(function () {
  // CREATE
  db.run(`
    CREATE TABLE IF NOT EXISTS ideas(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      title TEXT,
      category TEXT,
      description TEXT,
      link TEXT
    );
  `);

  // INSERT
  // const query = `
  //   INSERT INTO ideas(
  //     image,
  //     title, 
  //     category, 
  //     description, 
  //     link
  //   ) VALUES (?, ?, ?, ?, ?);
  // `;

  // const values = [
  //   "https://cdn-icons-png.flaticon.com/512/2729/2729007.png",
  //   "Cursos de Programação",
  //   "Estudo",
  //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recrum nisi alias ipsum, fugiat sed",
  //   "https://rocketseat.com.br",
  // ];

  // db.run(query, values, function (err) {
  //   if (err) return console.log(err);

  //   console.log(this);
  // });

  // DELETE
//   db.run(`DELETE FROM ideas WHERE id = ?`, [1], function (err) {
//     if (err) return console.log(err);
//     console.log("DELETEI", this);
//   });

  // SELECT
//   db.all(`SELECT * FROM ideas`, function (err, rows) {
//     if (err) return console.log(err);
//     console.log(rows);
//   });
});

module.exports = db