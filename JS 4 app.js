// LOCAL STORAGE
// set get remove update
localStorage.setItem("name" , "NIHAL GOUD");

//Session Storage
sessionStorage.setItem("name" , "NIHAL GOUD");

// Cookies
document.cookie = ("name" , "NIHAL GOUD");

localStorage.setItem("friends", JSON.stringify(["nihal" , "gourav" , "aryan"]))
// JSON.parse()

// dark-light mode

// window.matchMedia('(prefers-color-scheme: dark)')

function setDarkOrLight() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }
}

setDarkOrLight();


let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
    } else {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
    }
});

// CALLBACK HELL

// h1 = document.querySelector("h1")

// function changeColor(color , delay , nextColorChange){
//     setTimeout(() => {
//     h1.style.color = color;
//     nextColorChange();
//     },delay);
// }
// // setTimeout(() => {
// //     h1.style.color = "red";
// // },1000);
// // setTimeout(() => {
// //     h1.style.color = "yellow";
// // },2000);
// // setTimeout(() => {
// //     h1.style.color = "aqua";
// // },3000);

// changeColor("red" , 1100 , () => {
//     changeColor("blue" ,1100 , () => {
//         changeColor("yelow" ,1100);
//     });
// });

// function savetoDb(data , succes ,failure){
//     let internetSpeed = Math.floor(Math.random()*10) + 1;
//     if(internetSpeed > 4){
//         succes();
//     }else{
//        failure();
//     }
// }

// savetoDb(
//     "NIHAL GOUD" , 
//     () => {
//     console.log("success : your data was saved");
// } ,
// () => {
//     console.log("failure : weak connection. data not saved");
// }
// );


// PROMISES
// RESOLVE & REEJCT

// function savetoDb (data){
//     return new Promise((success , failure) => {
//          let internetSpeed = Math.floor(Math.random()*10) + 1;
//          if(internetSpeed > 4){
//             success("data was saved");
//          }else{
//             failure("weak connection");
//          }
//     });
// }

// savetoDb("NIHAL GOUD")
// .then(() => {
//     console.log("promise was resolved");
// })
// .catch(() => {
//      console.log("promise was rejected");
// });

// SYNC - ASYNC





