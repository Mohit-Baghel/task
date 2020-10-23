const { create, testscore } = require('./user.service');
const pool = require("../../config/database");


module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        create(body, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    succuss: 0,
                    message: "database connection error"
                });
            }
            return res.status(200).json({
                succuss: 1,
                data: result
            });
        });
    },

    test_score: (req, res) => {
        const body = req.body;
        testscore(body, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    succuss: 0,
                    message: "database connection error"
                });
            }
            return res.status(200).json({
                succuss: 1,
                data: result
            });
        });
    },


    high_score: (req, res) => {
        

        pool.query(`select name from candidate where id =1;select id,max(first_round) as max_marks from test_score `,function (error, results, fields) {
            if (error) throw error;
            
             console.log(results[1][0].id);
            return res.send({ data: results, message: 'thank you' });
        });


    },

    
    
    avg_score: (req, res) => {

        pool.query('select max(first_round),max(second_round),max(third_round),sum(first_round)/count(*),sum(second_round)/count(*),sum(third_round)/count(*) from test_score ', function (error, results, fields) {
            if (error) throw error;
            return res.send({ data: results, message: 'thank you' });
        });


    },









}