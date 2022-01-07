var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  console.log(global.connection);
  global.connection.query(
    "SELECT * FROM `Project`",
    function (err, results, fields) {
      console.log(err);
      if (!!err) return res.status(500).send("Internal server error.");
      res.send({ results });
    }
  );
});

module.exports = router;

// module.exports = function ({ connection }) {
//   router.get("/", function (req, res) {
//     console.log(connection);
//     res.send({ title: "Express" });
//   });

//   return router;
// };
