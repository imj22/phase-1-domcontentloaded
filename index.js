// Your code goes here

document.addEventListener("DOMContentLoaded", function(){
    const changeText = document.querySelector("#text")
    // console.log(changeText);
    changeText.textContent = "This is really cool!";
});


// document.addEventListener("DOMContentLoaded", textChange){
//     console.log("The DOM has loaded");
//   };

//   function textChange() {
//     const changeText = document.querySelector("text")
//     changeText.textContent = "This is really cool!";
//     console.log(changeText);
//   }
//   console.log(
//     "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
//   );