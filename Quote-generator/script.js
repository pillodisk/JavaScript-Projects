const quoteContainer =document.getElementById('quote-container');
const  quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


let apiQuotes = [];

function loading(){
loader.hidden=false;
quoteContainer.hidden = true;

}

// hide loading

function complete(){
  quoteContainer.hidden = false;
  loader.hidden= true;

} 
// show new quote
function newQuote(){
  loading();      
  //randomw quotes

        const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
        // check author if blank replace with unknown
        if (!quote.author){
            authorText.textContent ='Unknown';
            
          }else{ authorText.textContent = quote.author; 
        }
        // check if long text or not
        if (quote.text.length > 100){
          quoteText.classList.add('long-quote');

        }else {
          quoteText.classList.remove('long-quote');
        }
          
      // set quote hide loader

        //authorText.textContent = quote.author;
        quoteText.textContent = quote.text;
        complete(); 
    


}

// Get quotes from API
async function getQuotes() {
  loading();
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // Catch error here
  }
}

// Tweet quote

function tweetquote(){
 const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
 window.open(twitterUrl,'_blank');

}

newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetquote);

//loading(); 

// On load
getQuotes();
// function newQuote(){
//     //randomw quotes
//     const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]
//     console.log(quote);

// newQuote();
