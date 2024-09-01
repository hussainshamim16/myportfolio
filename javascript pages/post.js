const dark = document.getElementById('dark')
const light = document.getElementById('light')
var a = 5;


const alignment = (e) => {

    const containerClick = document.getElementById("containerClick");
    if (a > 2) {
        containerClick.style.justifyContent = "flex-end";
        light.href = "../css pages/light.css";
        e.innerHTML = "Dark";
        display = "light";
        localStorage.setItem("display", display)
        a = 0;
    } else {
        light.href = "";
        containerClick.style.justifyContent = "flex-start";
        e.innerHTML = "Light";
        display = "dark";
        localStorage.setItem("display", display)
        a = 6;
    }
}


const containerClick = document.getElementById("containerClick");
const btnValue = document.getElementById("btnValue");
let display = "dark";




if (localStorage.display === "light") {
    containerClick.style.justifyContent = "flex-end";
    light.href = "../css pages/light.css";
    btnValue.innerHTML = "Dark";

} else {
    light.href = "";
    containerClick.style.justifyContent = "flex-start";
    btnValue.innerHTML = "Light";

}

const feedName = document.getElementById("feedName")
const feedEmail = document.getElementById("feedEmail")
const feedBackMessage = document.getElementById("feedBackMessage")
const perantfeed = document.getElementById("perantfeed")

const add = () => {
    // console.log(feedName)
    perantfeed.innerHTML +=
        `
  
            <div class="box">
                <h1>${feedName.value}</h1>
                <h3>${feedEmail.value}</h3>
                <p>${feedBackMessage.value}</p>
            </div>
  
    `;
}
