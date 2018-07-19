const mysql = require('mysql');

let state = {
    pool: null
};


//This will be the public function to create a mysql connection
exports.connect = function(mode, done){

        //This is the current state variable which will be the 
        //mysql pool 
        state.pool = mysql.createPool({
        host:       'law-dash.c9os02zlzyuu.us-east-1.rds.amazonaws.com',
        user:       'portillaj',
        password:   'port6911',
        database:   'law_dashboard',
        port: 3306
    });

};

//This get function will be called by the data model to 
//get the state pool connect and to execute the query
exports.get = function(){
    return state.pool;
}