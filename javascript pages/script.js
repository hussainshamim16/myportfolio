const dark = document.getElementById('dark')
const light = document.getElementById('light')
const containerClick = document.getElementById("containerClick");
const btnValue = document.getElementById("btnValue");
var a = 5;
let display = "dark";

if (localStorage.display === "light") {
    containerClick.style.justifyContent = "flex-end";
    light.href = "./css pages/light.css";
    btnValue.innerHTML = "Dark";
} else {
    light.href = "";
    containerClick.style.justifyContent = "flex-start";
    btnValue.innerHTML = "Light";
}

let skills = ["VIDEO EDITOR", "GRAPHIC DESIGNER", "Fornt End Developer"]
let Skname = document.getElementById('Skname');
let parent = document.getElementById('parent');
count = 0;
setInterval((pera) => {
    Skname.innerHTML = '';
    if (count >= skills.length) {
        // alert("braaa")
        count = 0;
        return
    } else {
        var nikkalo = skills[count];
        // Skname.innerHTML = skills[count];
        parent.innerHTML = `<h2>Hi There !</h2>
        <h1>I AM MUHAMMAD <span>HUSSAIN</span></h1>
        <h1>A <span id="Skname" style=" animation-name: fade;
        animation-duration: 5s;">${nikkalo}</span></h1>
        <h2>and Visual Designer <br> with 03 experience in web development</h2>`;
        // console.log(nikkalo)
    }
    count++
}, 2000)


// localStorage.setItem("display",display)
const alignment = (e) => {

    if (a > 2) {
        containerClick.style.justifyContent = "flex-end";
        light.href = "./css pages/light.css";
        e.innerHTML = "Dark";
        display = "light";
        localStorage.setItem("display",display)
        a = 0;
    } else {
        light.href = "";
        containerClick.style.justifyContent = "flex-start";
        e.innerHTML = "Light";
        display = "dark";
        localStorage.setItem("display",display)
        a = 6;
    }
}

// console.log()



const navIn = (el)=>{
    const navOne = document.getElementById("navOne");
    console.log("click");


    if (a > 2) {
        el.style.color = "white";
        el.style.opacity = 1;
        navOne.className = "one show";
        a = 0;
    } else {
        el.style.color = "var(--gr3)";
        el.style.opacity = 0.8;
        navOne.className = "one hide";
        a = 6;
    }
}

const loader = () => {
    let load = document.getElementById("load")
    load.style.display = "flex"
}
const noLoader = () => {
    let load = document.getElementById("load")
    load.style.display = "none"
}

location.onload(()=>{
    loader()
})
