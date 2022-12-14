/* Display Functions */

function displayTextAsArr(arr, elementHide, elementShow) {
  elementHide.style.display = "none";
  elementShow.innerHTML = arr.map(w => {
    return `<p>${w}</p><span>&nbsp;</span>`; 
  }).join('');
}

function displayWordCounter(arr, element) {
  element.innerHTML = '';
  element.innerHTML = arr.map(w => {
    return `<div class="word-count">${w.word} <span>${w.count}</span></div>`
  }).join('');
}

function displayWordCloud(arr, element){
  element.innerHTML = '';
  // let reorderedArr = orderWordCloud(arr);
  element.innerHTML = arr.map(w => {
  return  `<div class="word-cloud-el" style="font-size: ${w.count * 15}px">${w.word}</div>`
  }).join('');
}


/* Create list of word & their count */
function getWordCount(arr) {
  let wordCount = [];

  for(let i = 0; i < arr.length; i++) {
    let foundWord = false;

    for (let w2 of wordCount){
      if (arr[i] === w2.word){ // { obj.word, obj.count}
        w2.count += 1;
        foundWord = true;
        break;
      }
    }
    (!foundWord)? wordCount.push({ word: `${arr[i]}`, count: 1}) : '';
  };
  return wordCount;   
}

/* Order word count so largest count is in the middle */
function reorderWordCount(wordCount) {
  let reordered = [];

  //reorder yay

  return reordered;
}

function orderWordCount() {

}
