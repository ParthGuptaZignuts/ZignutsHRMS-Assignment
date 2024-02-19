<script setup>
function submitData(){
let num1 = document.getElementById("num1").value;
console.log(num1);
console.log(typeof(num1));
num1 = Number(num1);
console.log(typeof(num1));


let num2 = document.getElementById("num2").value;
console.log(num2);
console.log(typeof(num2));
num2 = Number(num2);
console.log(typeof(num2));

const result = document.getElementById("result");

const radioButtons = document.querySelectorAll('input[name="fav_language"]');
let selectedSize;
for (const radioButton of radioButtons) {
  if (radioButton.checked) {
  selectedSize = radioButton.value;
  break;
  }
}
if(selectedSize === "addition"){
const num3 = num1 + num2 ; 
result.innerHTML = `<h1>the result of ${num1} + ${num2} is : ${num3} </h1>`
}else if(selectedSize === "subtraction"){
const num3 = num1 - num2 ; 
result.innerHTML = `<h1>the result of ${num1} - ${num2} is : ${num3} </h1>`
}else if(selectedSize === "multiplication"){
const num3 = num1 * num2 ; 
result.innerHTML = `<h1>the result of ${num1} * ${num2} is : ${num3} </h1>`
}else if (selectedSize === "division"){
const num3 = num1 / num2 ; 
result.innerHTML = `<h1>the result of ${num1} / ${num2} is : ${num3} </h1>`
}else if (selectedSize === "modulo"){
const num3 = num1 % num2 ; 
result.innerHTML = `<h1>the result of ${num1} % ${num2} is : ${num3} </h1>`
}
else{
  result.innerHTML = `<h1>select appropriate operations </h1>`
}

}





</script>

<template>
<div class="main"> 
<div class="child"> 
Enter the Number 1 : <input type="number" name="num1" id="num1">
<br>
Enter the Number 2 : <input type="number" name="num2" id="num2">
<br>
Select Operation You need to perform : 

<input type="radio" id="addition" name="fav_language" value="addition">
<label for="addition">Addition</label>
<input type="radio" id="subtraction" name="fav_language" value="subtraction">
<label for="subtraction">subtraction</label>
<input type="radio" id="multiplication" name="fav_language" value="multiplication">
<label for="multiplication">multiplication</label>
<input type="radio" id="division" name="fav_language" value="division">
<label for="division">divison</label>
<input type="radio" id="modulo" name="fav_language" value="modulo">
<label for="modulo">modulo</label>

<span id="result"> </span>

<br>
<button @click="submitData">Submit</button>
</div>
</div>


</template>

<style scoped>

.main{
  height: 100vh;
  width: 100vw;
  /* background-color:  #d0bdf4; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.child{
  height: 50vh;
  width: 70vh;
  background-color: #e5eaf5;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  padding: 10px;
}

</style>
