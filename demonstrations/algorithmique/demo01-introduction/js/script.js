console.log("Coucou la TOSA");

const text2 = document.getElementById("text2");

const myButton3 = document.getElementById("btn3");
console.log("btn3:", myButton3);

myButton3.onclick = () => {
  text2.textContent = "Coucou";
};