// for importing any module in our file
const fs = require ('fs');

//for using any function of module

//in this line of code a fiole named read.txt is created and the following content is written in it like the content writtern below

fs.writeFileSync('read.txt',"Welcome to my programming world...this is me Rudra Mistry....");


//to made changes to an existing file we use append function


fs.appendFileSync('read.txt', ' THIS IS MY SECOND LINE ADDED THROUGHT APPEND FUNCTION IN NODE>JS USING FS MODULE ')


//with the readFileSync() featre we can write the contents of any files
//In this the const buf_data stores the content of read.txt in binary form or buffder data
const buf_data = fs.readFileSync('read.txt')
console.log(buf_data);

<console className="log"></console>