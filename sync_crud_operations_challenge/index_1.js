

//Used for importing the module named file system module fs

const fs = require('fs');



// console.log("creating A directory using Fs module function mkdirSync")
// fs.mkdirSync('Rudra')
// console.log("Crated A new Direcotry named Rudra Inside the sync_crud_operations_challenge")



console.log("Creating a new file named read.txt and writing data to it")
fs.writeFileSync('read.txt',"Welcome to my programming world...this is me Rudra Mistry....")
console.log("Created a new file named read.txt with described content is fs.writeFileSync Function")



console.log("Adding more data to the end of read.txt")
fs.appendFileSync('read.txt',"  I am an  aspiring node js developer")
console.log("Appended more data in the file read.txt")



console.log('for reading the contents of file without getting the buffer data first we add a second paramter to the function readFileSyn to convert the contents of the file in text')
const read_data = fs.readFileSync('read.txt','utf-8')
console.log(read_data)


console.log("now renaming the file read.txt as myfile.txt using renameSync()")
fs.renameSync('read.txt','myfile.txt')
console.log('Changed the file name')


console.log("now deleting  the file read.txt as myfile.txt using unlinkSync()")
fs.unlinkSync('myfile.txt')
console.log('Deleted the file myfile.txt')