const db = require('../connection');

var events = {
    getAllEvents:function(callback){
        
        return db.query("Select * from events",callback);
    },

    getUser:function(userId,callback){
        console.log(userId);
        return db.query("Select userId, firstName, lastName from user where userid = ?",[userId],callback);
    },

    login:function(userId,password,callback){
        console.log(userId);
        return db.query("Select userId, firstName, lastName from user where userid = ? and password= ?",[userId,password],callback);
    },

    saveUser:function(userId,firstName,lastName,callback){
      
        return db.query("update user set firstName=?, lastName=? where userid=?",
        [firstName,lastName,userId],callback);
    }
}

module.exports =events;