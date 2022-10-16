//ცვლადები- variables

// let userName = "levani"; //string
// let userAge = 25; //number
// let statusUser = true;//boolean;
// let x = null; //null
// let y; //undefined


// console.log(typeof x);

// let x = 'good';
// let y = 'evening';

// console.log(x + " " + y);


//array
// let names = ['levani', 'ana', 'beka', 'nini', 'sopo', 'irakli'];
//          //    0        1       2       3       4         5
// console.log(names[1], names[5]);


//object
// let userInfo = {
//     userName: 'irakli',
//     userAge: 25
// }

// userInfo.userAge = 27;
// delete userInfo.userName;
// userInfo.userStatus = true;
// console.log(userInfo);
// console.log(userInfo['userStatus']);


//ციკლები - for
// let names = ['irakli', 'davit', 'giorgi', 'levani', 'ani', 'nini'];

// for (let x = 0; x < names.length; x++) {
//     console.log(names[x]);
// }

// x++ : x = x + 1

// for (let y of names) {
//     console.log(y);
// }

// let z = 0;
// while(z < names.length) {
//     console.log(names[z]);
//     z++;
// }


// if statement
// let item = 10;

// if (item > 50) {
//     console.log('hello');
// } else if(item > 100 || item < 50) {
//     console.log('hello2');
// } else {
//     console.log('error');
// }

// && - და
// || - ან
// = -მინიჭება
// === შედარება
// != - არ უდრის



//practice #1
// let numbers = [10, 25, 8, 47, 36, 5, 4, 15];

// for (let i = 0; i < numbers.length; i++) {
//     // console.log(numbers[i]);
//     if(numbers[i] > 20) {
//         console.log(numbers[i]);
//     }
// }

// for(let item of numbers) {
//     if (item > 20) {
//         console.log(item);
//     }
// }

// let numbers = [10, 25, 8, 47, 36, 5, 4, 15];

// for (let y of numbers) {
//    if (y % 2 != 1) {
//     console.log(y);
//    }
// }

// let languages = ['html', 'css', 'javascript','react'];

// for (let item of languages) {
//     if (item.length > 4 || item.includes('av')) {
//         console.log(item);
//     }
// }


//loop object
let user = {
    name: 'levani',
    age: 27
}

// for (let key in user) {
//     // console.log(key);
//     console.log(user[key]);
// }

// console.log(Object.keys(user)); //[ 'name', 'age' ]
// for (let z of Object.values(user)) {
//     console.log(z);
// }

// Object.values;
// Object.entries;

// console.log(Object.entries(user));
// for (let [key,value] of Object.entries(user) ){
//     console.log(key);
//     console.log(value);;
// }