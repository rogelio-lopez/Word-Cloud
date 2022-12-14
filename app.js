let button = document.querySelector('#Inputs button'); 
let wordCountEl = document.querySelector('#WordCount'); 
let wordCloudEl = document.querySelector('#WordCloud'); 

function startProgram(){
  let og_arr = [];
  let cleanArr = [];
  let wordCountArr = [];

  og_arr = textArea.value.split(' ').filter(n => n != ''); // split by space & filter no empty spaces 
  
  cleanArr = og_arr.map(w => { // Remove non char strings & capitalize the first letter
    return (w.charAt(0).toUpperCase() + w.substring(1).toLowerCase()).replace(/[^A-Za-z]/, '');
  });
  
  wordCountArr = getWordCount(cleanArr);
  // displayTextAsArr(og_arr, inputText, splitText);

  displayWordCounter(wordCountArr, wordCountEl);
  displayWordCloud(wordCountArr, wordCloudEl);
}


let textArea = document.querySelector('#Inputs textarea');
let inputText = document.querySelector('#InputText p'); 
let splitText = document.querySelector('#SplitText'); 

// Display text from the input 
textArea.addEventListener('input', (e) => {
  inputText.style.display = "block"; 
  splitText.innerHTML = ''; 
  inputText.innerHTML = e.target.value; 
});

// Display text from the input 
button.addEventListener('click', (e) => {
  e.preventDefault();
  startProgram(); 
});

/* TODO:
 * reordering word cloud 
 * */
