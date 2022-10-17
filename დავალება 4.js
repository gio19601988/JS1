let userg = {
  name: 'giorgi',
  age:  20,
  studentstatus: 'active'
}

if(userg.age < 18 && userg.studentstatus==="active"){
  console.log("Hello")
}else if(userg.name === "levani"){
  console.log("Hello levani")
}else if(userg.studentstatus === "active" || userg.age < 25){
  console.log("Hello world")
}
else{
  console.log("Error")
}
