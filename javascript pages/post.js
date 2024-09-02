
import {
db,
collection,
addDoc
} from "./firebase.js"

console.log("fed")

const  reder = document.getElementById("add")
reder.addEventListener( async ()=>{
    const userObject = {
        Username:"hussain",
        UserAge: 16,
        UserClass: 11,
        userRollNumber: 226825
    }

    const ref = collection(db, "user")
    const responce = await addDoc(ref,userObject)
    console.log(responce)
    alert("succses")
}
)

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
