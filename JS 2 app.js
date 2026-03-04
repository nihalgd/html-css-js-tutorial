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

