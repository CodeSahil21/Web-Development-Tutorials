const jwt = require("jsonwebtoken");
//decode verify generate
const value = {
    name : "sahil",
    accounNumber :1234655756
}
//jwt token creation
const token = jwt.sign(value,"secret");
console.log(token);
//this token has bee generated using this secret,and hence this token can only
//be verfied using this secret 