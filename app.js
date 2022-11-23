let textButton = document.querySelector('#TextInput button'); 
let textInput = document.querySelector('#TextInput textarea'); 
let displayText = document.querySelector('#DisplayTextInput p'); 
let displayTextArr = document.querySelector('#DisplayTextArr'); 
let displayTextInput = document.querySelector('#DisplayTextInput'); 
let displayWordList = document.querySelector('#DisplayWordList'); 
let wordCloudContainer = document.querySelector('#WordCloudContainer'); 

let arr = [];
let cleanArr = [];

// Display text from the input 
textInput.addEventListener('input', (e) => {

  displayTextInput.style.display = "block"; 
  displayTextArr.innerHTML = ''; 

  displayText.innerHTML = e.target.value; 
});


// Display text from the input 
textButton.addEventListener('click', (e) => {
  e.preventDefault();

  arr = textInput.value.split(' '); // With non chars  
  cleanArr = arr.map(w => w.replace(/[^A-Za-z]/, '')); // Without non chars

  displayTextInput.style.display = "none";

  displayTextArr.innerHTML = arr.map(w => {
    return `<p>${w}</p>`; 
  }).join('');
});




arr.forEach(w => {
  
  let foundWord = false;
  let cleanWord = w.replace(/[^A-Za-z]/, '');
  
  for (let w2 of arr){
    if (cleanWord === w2.word){ // { obj.word, obj.count}
      w2.count += 1;
      foundWord = true;
      break;
    }
  }
  
  (foundWord)? '' : arr.push({ word: `${cleanWord}`, count: 1});
});
