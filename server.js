let os = require("node:os");
let moment = require("moment");
let path = require("node:path");

console.log(os.platform());

console.log(os.totalmem()/1024/1024/1024/1024);
console.log(os.freemem()/1024/1024);
console.log(os.release());
console.log(path.parse("D:\MERN\React Js Project\static-app"));
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));