// import apiActions from './api/api-actions';

// // Create event list for sub button
// let button = document.querySelector("#inputSubmit")

// button.addEventListener("click", function (e) {
//     e.preventDefault()
//     // Onclick grab all of the data from the input boxes
//     console.dir(document.querySelector("#inputName").value);
//     const name = document.querySelector("#inputName").value;
//     const email = document.querySelector("#inputEmail").value;
//     const phone = document.querySelector("#inputPhone").value;
//     const message = document.querySelector("#inputMessage").value;
//     // console.log(name, email, phone, message)
//     // Put that data inside of an object
//     const emailOptions = {
//         name,
//         email,
//         phone,
//         message
//     }
//     //make a post to the api passing that object

//     api-Actions.postRequest('https://cryptic-caverns-70902.herokuapp.com/email',
//         { method: 'post', body: JSON.stringify(emailOptions) })
//         .then (x => console.log("succeeded"));
// })















// let coll = document.getElementsByClassName("project");
// for (let i = 0; i < coll.length; i++) {
//     coll[i].addEventListener("click", function () {
//         this.classList.toggle("active");
//         let resHolders = this.nextElementSibling;
//         if (resHolders.style.maxHeight) {
//             resHolders.style.maxHeight = null;
//         } 
//         else {
//             resHolders.style.maxHeight = resHolders.scrollHeight + "px";
//         }
//     });
// }