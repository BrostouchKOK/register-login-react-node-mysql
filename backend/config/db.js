import mysql, { createConnection } from 'mysql2'
import colors from "colors"

// Create connection
const db =  mysql.createConnection({
    host : process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

// Use the promise wrapper
const dbPromise = db.promise();

// Connect to MySQL DB
db.connect((err)=>{
    if(err){
        console.log("Database connection failed",err)
    }else{
        console.log(`MySQL Connected...`.bgGreen)
    }
})

export default dbPromise;
