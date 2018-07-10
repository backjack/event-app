var mysql=require('mysql');
var connection=mysql.createPool({

host:'sql12.freesqldatabase.com',
user:'sql12246845',
password:'bw5vqQ8yWY',
database:'sql12246845'

});
module.exports=connection;