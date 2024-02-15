// RESET VALUES FOR ALL
function resetValue(){
  document.getElementById('results').innerHTML = '';
  document.getElementById('results2').innerHTML = '';
  document.getElementById('results3').innerHTML = '';
  document.getElementById('results4').innerHTML = '';
  document.getElementById('results6').innerHTML = '';
}
// QUESTION-1
function generateCombinations(input) {
    const result = [];
    function backtrack(start, currentCombination) {
      for (let i = start; i < input.length; i++) {
        const newCombination = currentCombination + input[i];
        result.push(newCombination);
        backtrack(i + 1, newCombination);
      }
    }
    backtrack(0, '');
    return result;
  }
  function question1(){
      const inputString = document.querySelector("#value-1").value.trim();
      console.log(inputString);

      const combinations = generateCombinations(inputString);
      const result1 = document.querySelector("#results");

      result1.innerHTML = "";

      combinations.forEach(element => {
        const resultItem = document.createElement("li");
        resultItem.innerText = element ;
         result1.appendChild(resultItem);
      });
  }
  // QUESTION-2
  function findLongestWord(str) {
    var words = str.split(' ');
    var longestWord = '';
    var maxLength = 0;

    for (var i = 0; i < words.length; i++) {
      var cleanWord = words[i].replace(/[^a-zA-Z]/g, '');
      if (cleanWord.length > maxLength) {
        longestWord = cleanWord;
        maxLength = cleanWord.length;
      }
    }
  
    return longestWord;
  }
  function question2(){
    const inputString = document.querySelector("#value-2").value;
    console.log(inputString);
    var result2 = findLongestWord(inputString);
    const resultFromHtml = document.getElementById("results2");
    resultFromHtml.innerText = "Longest word:" + result2;
    console.log("Longest word:", result2);
  }
  // QUESTION-3
  function computeFactors(number) {
    if (typeof number !== 'number' || number <= 0 || !Number.isInteger(number)) {
      return 'Please provide a positive integer.';
    }
  
    const factors = [];
  
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        factors.push(i);
      }
    }
  
    return factors;
  }
  function question3(){
    let inputNumber = document.getElementById("value-3").value;
    inputNumber = Number(inputNumber);
    console.log(inputNumber , typeof(inputNumber));
    const factorsOfInput = computeFactors(inputNumber);

    const result3 = document.querySelector("#results3");
    result3.innerHTML = "";

    factorsOfInput.forEach( element => {
      const val = document.createElement("li");
      val.innerText = element ;
      result3.appendChild(val);
    });
  }
  // QUESTION-4
  function firstNonRepeatedCharacter(str) {
    const charCount = {};
    for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of str) {
      if (charCount[char] === 1) {
        return char;
      }
    }
    return null;
  }
  function question4(){
    const inputval4 = document.getElementById("value-4").value;
    console.log(inputval4);
    const resultoutput = firstNonRepeatedCharacter(inputval4);
    console.log(`The first non-repeated character is: ${resultoutput}`);
    const resultFromHtml = document.getElementById("results4");
    resultFromHtml.innerText = `The first non-repeated character is: ${resultoutput}` ;
  }

  // question 5
//   function getSubsetsWithFixedLength(arr, length) {
//     const result = [];

//     function generateSubsets(currentSubset, startIndex) {
//         if (currentSubset.length === length) {
//             result.push([...currentSubset]);
//             return;
//         }

//         for (let i = startIndex; i < arr.length; i++) {
//             currentSubset.push(arr[i]);
//             generateSubsets(currentSubset, i + 1);
//             currentSubset.pop();
//         }
//     }

//     generateSubsets([], 0);

//     return result;
// }
// const inputArray = [1, 2, 3];
// const subsetLength = 2;
// const resultSubsets = getSubsetsWithFixedLength(inputArray, subsetLength);
// console.log(resultSubsets);

// QUESTION-6
function question6(){
  const value6 = document.getElementById("value-6").value;
  console.log(value6);

  let valueToString = value6.toString();
  console.log(valueToString , typeof(valueToString));

  const finalAns = valueToString.split('').reverse().join('');

  const answersetter = document.getElementById("results6");
  answersetter.innerText= `The Answer of Reverse a number is ${finalAns}` ; 
  console.log(finalAns);
}
