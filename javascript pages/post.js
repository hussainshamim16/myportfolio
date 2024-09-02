
import {
    db,
    collection,
    addDoc
    , getDocs
    , doc
} from "./firebase.js"

console.log("fed")

const loader = () => {
    let load = document.getElementById("load")
    load.style.display = "flex"
}
const noLoader = () => {
    let load = document.getElementById("load")
    load.style.display = "none"
}

// reder.addEventListener("click",()=>{
//     console.log("click")
// })

// s
// const add = () => {
//     // console.log(feedName)
//     perantfeed.innerHTML +=
//         `

//             <div class="box">
//                 <h1>${feedName.value}</h1>
//                 <h3>${feedEmail.value}</h3>
//                 <p>${feedBackMessage.value}</p>
//             </div>

//     `;
// }
let feedName = document.getElementById("feedName")
let feedEmail = document.getElementById("feedEmail")
let feedBackMessage = document.getElementById("feedBackMessage")
let perantfeed = document.getElementById("perantfeed")

const reder = document.getElementById("add")
reder.addEventListener("click", async () => {
    const userObject = {
        feederName: feedName.value,
        feederEmail: feedEmail.value,
        feederMessage: feedBackMessage.value,
    }

    const ref = collection(db, "user")
    const responce = await addDoc(ref, userObject)
    console.log("responce")
    alert("succses")

    location.reload()
}
)

async function GetData(pera) {
    // console.log("hello world")

    // perantfeed.innerHTML +=
    //         `

    //             <div class="box">
    //                 <h1>${feedName.value}</h1>
    //                 <h3>${feedEmail.value}</h3>
    //                 <p>${feedBackMessage.value}</p>
    //             </div>

    //     `;
    // const ref = doc(collection(db, "user"))
    // const responce = await getDoc(ref)
    // // console.log("responce", responce.id)
    // console.log("responce", responce.data())
    // alert("succses")

    try {
        loader()
        const ref = collection(db, "user")
        const responce = await getDocs(ref)
        console.log("responce", responce)
        // alert("succses")
        responce.forEach(doc => {
            let dataa = doc.data()
            perantfeed.innerHTML +=
                `
    
                    <div class="box">
                        <h1>${dataa.feederName.toUpperCase()}</h1>
                        <h3>${dataa.feederEmail.toUpperCase()}</h3>
                        <p>${dataa.feederMessage.toUpperCase()}</p>
                    </div>
    
            `;
        });


noLoader()

    } catch (error) {
        alert("error ", error.message)
    }

}
GetData()


// let headind = "hussain"
// headind = headind.toUpperCase()
// console.log(headind)