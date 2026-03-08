// // // DOM 

// // let abcd = document.getElementById("abcd");
// // console.dir(abcd);

// // document.getElementsByClassName("abcd");
// // console.log(abcd);

// // let h1 = document.querySelector ("h1")
// // h1.textContent = ("hellloooowiiiiii");
// // h1.innerHTML = ("hellow!"); // yeh html meh dalta haiii
// // console.dir(h1);

// // // Attribute Manipulation (get set remove)

// // let a = document.querySelector("a")
// // console.log(a.getAttribute("href"));
// // // console.log(a.removeAttribute("href"));

// // // Dynamic DOM - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// // let newh1 = document.createElement("h1")
// // h1.textContent = ("hellooww jii");
// // document.body.appendChild(h1);
// // console.log(h1);

// // h3 = document.querySelector("h3");
// // h3.remove();
// // console.dir(h3);


// // // addd styling from css - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// // let ok = document.getElementById("ok");
// // ok.style.color = "red";
// // ok.style.backgroundColor = "yellow"
// // console.dir(ok);

// // EVENT - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// // let button = document.querySelectorAll("button");
// // console.dir(button);

// // for (button of button){
// //     button.onmouseenter = function(){
// //     console.log("button was clicked!")
// // };
// // }

// // button.onclick = function(){
// //     console.log("button was clicked!")
// // };


// let button = document.querySelectorAll("button");

// for (button of button){
// //    button.addEventListener("click" , saymyname);
// //    button.addEventListener("click" , saymynaam);
//    button.addEventListener("dblclick" , saymyname);
//    button.addEventListener("dblclick" , saymynaam);
//    console.log("double click!")
// }
// function saymyname(){
//     alert("walter white");
// }
// function saymynaam(){
//     alert("Pablo");
// }

// let btn = document.querySelector("button");


// btn.addEventlistener("click", function(){
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;
//     console.log("Generate random color")
// })

// function getRandomColor (){
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);

//     let color = `(${red} , ${green} , ${blue} ,)`;
//     return color;
// }
// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// // EVENT - - - - - - - - EVENT - - - - - - - - - - - - - EVENT - - - - - - - - - - - - - - - - - - - - - - - 

// let p = document.querySelector("p");

// p.addEventListener("click", function (){
//     console.log("click")
// });

// let div = document.querySelector("div");

// div.addEventListener("mouseenter" , function(){
//      console.log("huiiiiiii")
// } )

// let btn = document.querySelector("button");
// btn.addEventListener("click" , function(){
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
// })

// let btn = document.querySelector("button");

// btn.addEventListener("click" , function(event){
//     console.log(event);
    
// })
// btn.addEventListener("dblclick" , function(event){
//     console.log(event);
    
// })
// let input = document.querySelector("input");
// input = addEventListener("keyup" , function(event){
//     // console.log(event);
//     console.log("presssedd");
// })

// let form = document.querySelector("form");

// form.addEventListener("submit" , function(event){
//     event.preventDefault();
//     // console.dir(form);
//     // console.log("form submit")

//     let username = document.querySelector("#username");
//     let password = document.querySelector("#password");


//     console.log(username.value);
//     console.log(password.value);

    
// });

// // EVENT BUBBLING - - - - - - - - EVENT BUBBLING  - - - - - - - - - - - - - EVENT BUBBLING - - - - - - - - - - - - - - - - - - - - - - - 

// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let list = document.querySelector("li");


// div.addEventListener("click" , function(){
//     console.log("div was clicked");
// });
// ul.addEventListener("click" , function(event){
//     console.log("ul was clicked");
//     event.stopPropagation();
// });

let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul")

button.addEventListener("click" , function(){
    let item = document.createElement("li");
    item.innerText = input.value;
    console.log(input.value);
    ul.appendChild(item);
    input.value = "";
    
})