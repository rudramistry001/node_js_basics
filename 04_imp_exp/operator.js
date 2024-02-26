
//function declaration
const add =(a,b) =>{

    return a+b;
}


const sub =(a,b) =>{

    return a-b;
}
const mult =(a,b) =>{

    return a*b;
}

const name = "YO GUYS THIS IS RUDRA MISTRY AND THIS IS MY FIRST MODULE IN NODE.JS";

//in node every single file is reffered to as a module .
//module exported
// we not need to pass () while exoorting any module.
// module.exports.add= add;
// module.exports.sub = sub;
// module.exports.name= name;

//WE can also exports modules by another method such as
module.exports= {add , sub , name,mult};