// DOM 

let abcd = document.getElementById("abcd");
console.dir(abcd);

document.getElementsByClassName("abcd");
console.log(abcd);

let h1 = document.querySelector ("h1")
h1.textContent = ("hellloooowiiiiii");
h1.innerHTML = ("hellow!"); // yeh html dalta haiii
console.dir(h1);

// Attribute Manipulation (get set remove)

let a = document.querySelector("a")
console.log(a.getAttribute("href"));
// console.log(a.removeAttribute("href"));

// Dynamic DOM

// let newh1 = document.createElement("h1")
// h1.textContent = ("hellooww jii");
// document.body.appendChild(h1);
// console.log(h1);

let h3 = document.querySelector("h3");
h3.remove();
console.log(h3);