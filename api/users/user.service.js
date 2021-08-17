const pool = require("../../config/database")
module.exports = {
    create: (data,callback) =>{
    pool.query(
        `insert into registration (firstName, lastName, gender, email, password, number)
        values(?,?,?,?,?,?)`,
    [
        data.firstName,
        data.lastName,
        data.gender,
        data.email,
        data.password,
        data.number
    ],
    (error,results,fields)=>{
        if(error)
        {
            return callback(error);
        }
        return callback(null,results);
    });        
    },
    getUsers: callback=>{
        pool.query(
            `select firstName, lastName, gender, email, number from registration`,
            [],
            (error,results,fields)=>{
                if(error)
                {
                    return callback(error);
                }
                return callback(null,results);
            }
        );
    },
    getUserByUserId: (id,callback)=>{
        pool.query(
            `select id, firstName, lastName, email, number where id= ?`,
            [id],
            (error,results,fields)=>{
                if(error)
                {
                    return callback(error);
                }
                return callback(null,results);
            }
        );
    },
    updateUser: (data,callback) =>{
        pool.query(
            `update registration set firstName=?, lastName=?, gender=?, email=?, password=?, number=?`,
        [
            data.firstName,
            data.lastName,
            data.gender,
            data.email,
            data.password,
            data.number
        ],
        (error,results,fields)=>{
            if(error)
            {
                return callback(error);
            }
            return callback(null,results[0]);
        });        
        },
    deleteUser: (data,callback)=>{
        pool.query(
            `delete from registration where id=?`,
            [data.id],
            (error,results,fields)=>{
                if(error)
            {
                return callback(error);
            }
            return callback(null,results[0]);
            }
        );
    },
    getUserByUserEmail:(email,callback)=>{
        pool.query(
            `select * from registration where email = ? `,
            [email],
            (error,results,fileds)=>{
                if(error){
                    return callback(error);
                }
                return callback(null,results[0]);
            }
        );
    },
    signUp: (data,callback) =>{
        pool.query(
            `insert into registration (firstName, lastName, gender, email, password, number)
            values(?,?,?,?,?,?)`,
        [
            data.firstName,
            data.lastName,
            data.gender,
            data.email,
            data.password,
            data.number
        ],
        (error,results,fields)=>{
            if(error)
            {
                return callback(error);
            }
            return callback(null,results);
        });        
        }
};