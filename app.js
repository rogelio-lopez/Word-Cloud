const text = 'At Scorpion, we have the technology to connect all of your marketing and show you the results you expect from the money you spend. From our research and customer management software to our artificial intelligence-led search engine products, we have the latest technology to grow your business. Once the technology is in place, our team of specialists will partner with you along the way to handle all of the marketing for your business, so you can focus on providing a great experience to your customers.'

let arr = [];

text.split(' ').forEach(w => {
  
  let foundWord = false;
  let cleanWord = w.replace(/[^A-Za-z]/, '');
  
  for (let w2 of arr){
    if (cleanWord === w2.word){ // { obj.word, obj.count}
      w2.count += 1;
      foundWord = true;
      break;
    }
  }
  if (!foundWord){
    let newWord = new Object();
    newWord.word = cleanWord;
    newWord.count = 1;
    arr.push(newWord);
  }
});

console.log(arr);
