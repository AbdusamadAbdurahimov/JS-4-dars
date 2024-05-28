// let round =Math.raund(8.1);

// document.write(round);

// let pow = Matn.pow(4,5);
// let sqrt = Math.sqrt(16);
// let abs = Math.abs(-12.8);
// let ceil = Math.ceil(49.1);
// let floor = Math.floor(49.9);
// let min = Math.min(25,233,2,575,5,13);
// let max = Math.max(25,323,434,54,685,2)
// document.write(floor);

let byTag = document.getElementsByTagName("h1")
let byId = document.getElementById("idnomi");
let byClass = document.getElementsByClassName("classNomi")
let byselector = document.querySelector(".classNomi");
let byselectorAll = document.querySelectorAll(".classNomi");
let byAll = document.getElementsByTagName("h1").namedItem("idNomi");

byAll.style.backgroundColor = "green";
byAll.style.color = "yellow";
byAll.style.height ="350px";
byAll.style.width ="250px";
byAll.style.border ="5px solid royalblue";
byAll.style.textAlign ="center";
byAll.style.paddingTop ="70px";
byAll.style.boxSizing = "border-box";
byAll.style.textTransform = "uppercase";

let matn = byAll.innerText ="xayr dunyo!";
console.log(byAll);



