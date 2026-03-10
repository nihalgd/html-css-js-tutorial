// LOOPS !

// Kha seh jana hai - kaha tak jana hai - kaise jana hai
// FOR LOOP

// kha seh jana hai - kab rukna hai - kaise jana hai
// WHILE LOOP


// FOR LOOP
for(let i=1; i<=100; i++){
    console.log(i);
}

for(let i=1; i<=200; i++){  //BREAK
    console.log(i);
    if(i === 69){
        break;
    }
}
for(let i=1; i<=200; i++){  //CONTINUE
    if(i === 69){
        continue;
    } 
    console.log(i);
}

// WHILE LOOP
i = 1;
while(i<32){
    console.log(i);
    i++
}

// DO  WHILE LOOP
i = 12;
do{
    console.log(i);
    i++;
}
while(i<2)

//PRACTICE QUESTIONS
// for(let i=10; i>=0; i--){
//     console.log(i);
// }

// i=10;
// while(i>=0){
//     console.log(i);
//     i--
// }

// - - - - - - - - - - - - - // - - - - - - - - - - - - - // - - - - - - - - - - - - - // - - - - - - - - - - - - - // - - - - - - - - - - - - - // - - - - - - - - - - - - - //

// FUNCTION

function Hi(){ //function declaration
   console.log("helllowwiiii");
}
Hi();

let fnc = function(){ //function expression
    console.log("hehehehehe")
}
fnc();

fnc = () => { //arrow function / fat arrow fnc
    console.log("heheheehhe");
};
fnc(); 

function print(v1){  // v1 parameter haii
    console.log(`hellooowwii ${v1}`);
}
print("nihal");      // "nihal" arguments haiii!!!!!
print("niharika");
print("nihal bhaiii");
print("nihal vrooo");
print("yooo whts app nihal");

function run(r){
    console.log(`${r} bhaagg bc`)
}
run("haaannn");
run("haaannn tejjj");

function add (g1,g2){
    console.log(g1+g2)
}
add(33,22);
add(456,49);

function abcd(...val){    // rest operator
   console.log(...val)
}
abcd(1,2,3,4,5,6,7,8,9,10);

function abcd(){          // return operator
    return 69;
}
let val = abcd();
console.log(val);

function abcd(val){       // first class function
    val();
}
abcd(function(){
    console.log("heyy")

});

function abcd(){          // higher order function
    return function () {
        console.log("heyheyheyhey");
    };
}
abcd()();

let a = 69;                   // pure function
function abcd(){
    console.log(a);
}
abcd();

function abcd(){             // impure function
    a++;
}
abcd();

function abcd(){           // closure function
    let a=12;
    return function(){
        console.log(a);
    }
}
abcd()();

function abcd(){         // lexical spocing
    let a = 10;
    function defg(){
        let b = 20;
        // console.log(a);
        function hijk(){
            // console.log(b);
        }
        // return hijk;
    }
    // return defg;
}

(function(){              // IIFE Function
    console.log("huihuihiui")
})();

abcd();                   // hoisting functions
function abcd(){
    console.log("huuiihuiii");
}

// - - - - - - - - - - - - - // - - - - - - - - - - - - - // - - - - - - - - - - - - - // - - - - - - - - - - - - - // - - - - - - - - - - - - - // - - - - - - - - - - - - - //

// ARRAYS!

    let marks = [10,20,30,40,50,60,70,80,90,100];
    marks[9]=1000;
    console.log(marks);

    marks = [10,20,30,40,50,60,70,80,90,100];
    marks.push(2000);
    console.log(marks);

    marks = [10,20,30,40,50,60,70,80,90,100];
    marks.pop(100);
    console.log(marks);

    marks = [10,20,30,40,50,60,70,80,90,100];
    marks.shift();
    console.log(marks);

    marks = [10,20,30,40,50,60,70,80,90,100];
    marks.unshift(0);
    console.log(marks);

    marks = [10,20,30,40,50,60,70,80,90,100];
    marks.splice(2,2)
    console.log(marks);

    marks = [10,20,30,40,50,60,70,80,90,100];
    newmark = marks.slice(0,5);
    console.log(marks);
    console.log(newmark);


   marks = [10,20,30,40,50,60,70,80,90,100];
   marks.reverse();
   console.log(marks);

   marks = [0,456,49,46,46,4,79,1,6,8,1,78,5,];
   marks = marks.sort(function(a,b){
    return(a-b);
   });
//    marks.sort();
   console.log(marks);

   marks = [10,20,30,40,50,60,70,80,90,100];    // for each
   marks = marks.forEach(function(val){
    console.log(val+100);
   });

   marks = [10,20,30,40,50,60,70,80,90,100];     // map function
   let newmark = marks.map(function(val){
    return 12;
   });
   console.log(newmark)

   marks = [10,20,30,40,50,60,70,80,90,100];     // filter function
   let newmarks = marks.filter(function(val){
    if(val>50)
    return true;
   });
   console.log(newmarks)

   marks = [10,20,30,40,50,60,70,80,90,100];    // reduce
   marks = marks.reduce(function(accumalator,value ){
    return accumalator + value ;
   },0);
   console.log(marks)

   marks = [10,20,30,40,50,60,70,80,90,100];    // find
   marks = marks.find(function(val){
    return val === 20;
   });
   console.log(marks)

   marks = [10,20,30,40,50,60,70,80,90,100];    // some
   markss = marks.some(function(val){
    return val > 85;
   });
   console.log(markss)

   marks = [10,20,30,40,50,60,70,80,90,100];    // every
   let markss = marks.every(function(val){
    return val > 50;
   });
   console.log(markss)

    marks = [10,20,30,40,50,60,70,80,90,100];    //de-structuring 
    [a,b] = marks;
    console.log(b)

    marks = [10,20,30,40,50,60,70,80,90,100];   //spread-operator
    marks1 = [...marks];
    console.log(marks)

    //PRACTICE QUESTIONS
    // let fruits = ["papaya","orange","banana"]
    // fruits [2] = ("Kiwi")
    // fruits.push("Mango")
    // fruits.unshift("pineapple")
    // console.log(fruits);

    // color= ["green" , "yellow"];
    // color.splice(1,0,"red","blue");
    // console.log(color)

    // arr = [1,2,3,4,5,6]
    // arrays = arr.slice(1,4)
    // console.log(arrays)

    // naam = ["nihal" , "gourav" , "lucky" , "aryan" , "zebra"]
    // nam = naam.sort().reverse();
    // console.log(nam);
   
    // square = [2,3,4,5,6];
    // sq = square.map(function(val){
    //     return val*2;
    // })
    // console.log(sq);

    // no = [5,8,10,12,15,20]
    // num = no.filter((val)=>{
    //     return val>10;
    // })
    // console.log(num);

    
// - - - - - - - - - - - - - // - - - - - - - - - - - - - // - - - - - - - - - - - - - // - - - - - - - - - - - - - // - - - - - - - - - - - - - // - - - - - - - - - - - - - //

// OBJECTS!


let obj = {
    name : "nihal",   
    age  : 20,
};
console.log(obj.age);

const user = {
    name : "Nihal",
    address : {
        city : "Indore",
        pin : 452015,
        location : {
            lat : 23.2,
            lon : 56.5,
        },

    },
};
// console.log(user.address.location); 
let{lat,lan} = user.address.location;   // yeh hai de-structuringg!
console.log(lat)

const det = {
    name : "Nihal",
    address : {
        city : "Indore",
        pin : 452015,
        location : {
            lat : 23.2,
            lon : 56.5,
        },

    },
};

// for (let key in det) {
//     console.log(key, det[key]);
// }
Object.keys(det);
Object.entries(det);




