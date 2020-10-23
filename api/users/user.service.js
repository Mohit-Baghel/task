const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into candidate(name,email ) 
                values(?,?)`,
      [
        data.name,
        data.email,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  testscore: (data, callBack) => {
    pool.query(
      `insert into test_score(first_round,second_round,third_round ) 
                values(?,?,?)`,
      [
        data.first_round,
        data.second_round,
        data.third_round
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },


  


  
};
