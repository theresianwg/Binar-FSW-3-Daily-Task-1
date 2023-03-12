const person = [
    {
        "_id": "640b3d3e458735123b17557d",
        "isActive": false,
        "age": 25,
        "eyeColor": "green",
        "name": "Dolly Mcgowan",
        "gender": "female",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "640b3d3e875f328b4f3ef373",
        "isActive": false,
        "age": 20,
        "eyeColor": "green",
        "name": "Elliott Gilbert",
        "gender": "male",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "640b3d3e56e712e22867d65b",
        "isActive": true,
        "age": 32,
        "eyeColor": "blue",
        "name": "Myra Leach",
        "gender": "female",
        "favoriteFruit": "apple"
    },
    {
        "_id": "640b3d3e991c27ca4b29812f",
        "isActive": false,
        "age": 24,
        "eyeColor": "blue",
        "name": "Holder Dotson",
        "gender": "male",
        "favoriteFruit": "banana"
    },
    {
        "_id": "640b3d3e7ac7636acd9c543a",
        "isActive": true,
        "age": 39,
        "eyeColor": "blue",
        "name": "Rivas Gilliam",
        "gender": "male",
        "favoriteFruit": "banana"
    },
    {
        "_id": "640b3d3ead279af80afbb703",
        "isActive": false,
        "age": 22,
        "eyeColor": "blue",
        "name": "Diaz Jimenez",
        "gender": "male",
        "favoriteFruit": "banana"
    },
    {
        "_id": "640b3d3e4f028a0f3ad6903b",
        "isActive": true,
        "age": 37,
        "eyeColor": "blue",
        "name": "Whitaker Ware",
        "gender": "male",
        "favoriteFruit": "banana"
    },
    {
        "_id": "640b3d3e8b86d6cdf7e8da2f",
        "isActive": true,
        "age": 36,
        "eyeColor": "brown",
        "name": "Manning Valdez",
        "gender": "male",
        "favoriteFruit": "apple"
    },
    {
        "_id": "640b3d3ef0012b80c52f49ad",
        "isActive": true,
        "age": 34,
        "eyeColor": "blue",
        "name": "Lottie Kirk",
        "gender": "female",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "640b3d3eafacf8e223bb5cb5",
        "isActive": true,
        "age": 33,
        "eyeColor": "green",
        "name": "Rosario Alvarado",
        "gender": "female",
        "favoriteFruit": "banana"
    },
    {
        "_id": "640b3d3ee756603d188f274d",
        "isActive": false,
        "age": 35,
        "eyeColor": "blue",
        "name": "Blackburn Garza",
        "gender": "male",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "640b3d3e834cbf2ab5fac10c",
        "isActive": false,
        "age": 40,
        "eyeColor": "green",
        "name": "Norma Barber",
        "gender": "female",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "640b3d3e642ca5f7da3d2efa",
        "isActive": true,
        "age": 37,
        "eyeColor": "brown",
        "name": "Owens Carrillo",
        "gender": "male",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "640b3d3e6b6cfc3db806a472",
        "isActive": true,
        "age": 38,
        "eyeColor": "green",
        "name": "Wright Cleveland",
        "gender": "male",
        "favoriteFruit": "apple"
    },
    {
        "_id": "640b3d3ec454e6738c3e193d",
        "isActive": false,
        "age": 23,
        "eyeColor": "blue",
        "name": "Jackie Owen",
        "gender": "female",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "640b3d3e105aedde807a7aaa",
        "isActive": false,
        "age": 25,
        "eyeColor": "blue",
        "name": "Walter Tran",
        "gender": "male",
        "favoriteFruit": "banana"
    }
]

// // 1) print person yang suka buah apple dan warna mata nya biru 
// let arr=[]
//     for (let i=0; i < person.length; i++){
//         if (person[i].favoriteFruit === 'apple' && person[i].eyeColor === 'blue'){
//             arr.push(person[i])
//                 console.log(person[i].name);
//         }
// }

// // 2) print berapa person yang age nya diatas 30 
// let arr=[]
//     for (let i=0; i < person.length; i++){
//         if (person[i].age > 30){
//             arr.push(person[i])
//         }
// }

//     if (arr.length > 0) {
//         console.log(`jumlah orang yang berumur diatas 30 adalah ${arr.length} orang`);
//     }


// 3) print person yang isActive true and  gender nya female 
// let arr=[]
//     for (let i=0; i < person.length; i++){
//         if (person[i].isActive === true && person[i].gender === 'female'){
//             arr.push(person[i])
//                 console.log(person[i].name);
//         }
// }

// 4) print yang age nya diatas 30 atau dibawah 25 dan eyeColor nya blue 
// let arr=[]
//     for (let i=0; i < person.length; i++){
//         if (person[i].age > 30 || person[i].age < 25 ) {
//             if (person[i].eyeColor === 'blue') {
//             arr.push(person[i])
//                 console.log(person[i].name);
//             }
//         }
// }

// 5) print person yang mengandung huruf W di name nya 
let arr=[]
    for (let i=0; i < person.length; i++){
        if (person[i].name === 'w') {
            arr.push(person[i])
                console.log(person[i].name);
        }
}

// 6) print person isActive false dan gender nya male dan age nya diatas 25 
// 7) print person age nya dibawah 30 atau eyeColor brown dan favoritFruit nya banana 
// 8) print person gender male 
// 9) print person eyeColor Blue 
//  10) print person age diatas 30