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