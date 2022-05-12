console.log("In this video we will be see more Event on js.");

// let btn = document.getElementById("btn1");
// btn.addEventListener("click", func1);

// function func1(e){
//     btn.style.color='red';
//     console.log("Thanks you clicked on this button", e);
//     e.preventDefault();
// }

// //click, dblclick and mousedown📌📌📌
// //--------------------------------
// let button = document.getElementById("btn2");
// button.addEventListener("click", function2);
// // button.addEventListener("dblclick", function3);
// button.addEventListener("mousedown", function4);

// function function2(element){
//     // console.log("Thanks to click");
//     // button.style.background = 'red';
//     // button.style.color = 'white';
//     // button.style.border = 'none';
//     // button.style.borderRadius = '4px';
//     element.preventDefault();
// }
// // function function3(element){
// //     console.log("Thanks, its a double click.");
// //     element.preventDefault();
// // }


// function function4(element){
//     console.log("Thanks, its a Mouse down");
//     element.preventDefault();
// }


// // mouseenter and mouseleave📌📌📌
// //--------------------------------
// document.querySelector("#itemsId").addEventListener("mouseenter", function (e){
//     console.log("Mouse entered in item id");
// });
// document.querySelector("#itemsId").addEventListener("mouseleave", function (e){
//     console.log("Mouse exit from item id");
// });

// // mousemove📌📌📌
// //--------------------------------
document.querySelector("#mainContainer").addEventListener("mousemove", function (e) {
    console.log("Mouse is moved");
    console.log(e.offsetX);
    console.log(e.offsetY);

    
    document.body.style.background = `rgb(${e.offsetX},${e.offsetY},155)`;

})