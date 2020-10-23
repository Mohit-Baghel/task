const {createPool }=require('mysql');


const pool= createPool({
    port:process.env.db_port,
    user:process.env.db_user,
    password:process.env.db_pass,
    database:process.env.mysql_db,
    multipleStatements:true,
    connectionlimit:10.

})



module.exports=pool;