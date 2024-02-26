const fs = require('fs');
const MyDetalls = {
name : "Rudra  H Mistry",
Age : "18",
Hobby : "Coding in Node.js",
}

const JsonData = JSON.stringify(MyDetalls);
fs.writeFile('details.json',JsonData,(error) => {

    console.log("DATA CONVERTED TO JSON>>>TASK DONE")
});

//readinf the file and converting it's data to string in console 
fs.readFile('details.json','utf-8', (error, data) => {
    const orgData = JSON.parse(data);
    console.log(data);
    console.log(orgData);
});