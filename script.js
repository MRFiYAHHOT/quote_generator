const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

// Show Loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;}

// Check Quote length to determine styling

if (quote.length > 50) {
    quoteText.classList.add('long-quote');
} else {
    quoteText.classList.remove('long-quote');
} 
quoteText.textContent = quote.text;

// Get Quotes From API 
async function getQuote() {
    loading();
    const apiURL = 'https://api.quotable.io/random';
    try{
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        authorText.textContent = apiQuotes.author;
        quoteText.textContent = apiQuotes.content;
        console.log(apiQuotes);
    }catch(error){
        console.log('Whoops, no quote', error);
        //Catch Error Here
    }
}

//Tweet Quote

function tweetQuote() {
    const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterURL, '_blank');
}

//Event Listeners

newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);

//On Load
 getQuote();
