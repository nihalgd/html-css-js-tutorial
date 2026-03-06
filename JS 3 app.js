// // DOM 

// let abcd = document.getElementById("abcd");
// console.dir(abcd);

// document.getElementsByClassName("abcd");
// console.log(abcd);

// let h1 = document.querySelector ("h1")
// h1.textContent = ("hellloooowiiiiii");
// h1.innerHTML = ("hellow!"); // yeh html meh dalta haiii
// console.dir(h1);

// // Attribute Manipulation (get set remove)

// let a = document.querySelector("a")
// console.log(a.getAttribute("href"));
// // console.log(a.removeAttribute("href"));

// // Dynamic DOM - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// let newh1 = document.createElement("h1")
// h1.textContent = ("hellooww jii");
// document.body.appendChild(h1);
// console.log(h1);

// h3 = document.querySelector("h3");
// h3.remove();
// console.dir(h3);


// // addd styling from css - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// let ok = document.getElementById("ok");
// ok.style.color = "red";
// ok.style.backgroundColor = "yellow"
// console.dir(ok);

// EVENT - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// let button = document.querySelectorAll("button");
// console.dir(button);

// for (button of button){
//     button.onmouseenter = function(){
//     console.log("button was clicked!")
// };
// }

// button.onclick = function(){
//     console.log("button was clicked!")
// };


let button = document.querySelectorAll("button");

for (button of button){
    button.onclick = saymyname;
    button.onclick = saymynaam;

}
function saymyname(){
    alert("walter white");
}
function saymynaam(){
    alert("Pablo");
}


