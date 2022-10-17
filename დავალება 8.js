let users = [
    {username: 'giorgi', status : false},
    {username: 'levani', status : false},
    {username: 'anna', status : true},
]
for(let x of users){
    if(x.status == true){
        console.log(x)
    }
}