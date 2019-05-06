/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
var quotes = [
  {
    quote:
      'Traders focus almost entirely on where to enter a trade. In reality, the entry size is often more important than the entry price',
    source: 'Jack D. Schwager',
    citation: 'Hedge Fund Market Wizards: How Winning Traders Win, p.240',
    year: 2012
  },
  {
    quote:
      "You don't have to get in or out of a position all at once. Avoid the temptation of wanting to be completely right.",
    source: 'Jack D. Schwager',
    citation:
      "The New Market Wizards: Conversations with America's Top Traders, p.67"
  },
  {
    quote:
      'I think the secret is cutting down the number of trades you make. The best trades are the ones in which you have all three things going for you: fundamentals, technicals and market tone.',
    source: 'Michael Marcus',
    citation: 'Hedge Fund Market Wizards: How Winning Traders Win, p.29'
  },
  {
    quote:
      'The Heisenberg principle in physics provides an analogy for the markets. If something is closely observed, the odds are it is going to be altered in the process...The more a price pattern is observed by speculators, the more prone you are to have false signals. ',
    source: 'Bruce Kovner',
    citation: 'Hedge Fund Market Wizards: How Winning Traders Win, p.87',
    year: 1987
  },
  {
    quote:
      "Don't ever average losers. Decrease your trading volume when you are trading poorly; increase your volume when you are trading well. Never trade in situations where you don't have control. For example, I don't risk significant amounts of money in front of key reports, since that is gambling, not trading.",
    source: 'Paul Tudor Jones'
  }
];

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
function getRandomQuote() {
  var rngSelector = Math.floor(Math.random() * quotes.length) + 1;

  return rngSelector;
}

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
function print(html) {
  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = html;
}

function printQuote() {
  var qIndex = getRandomQuote();
  var html = '';

  var quote = '<p class=quote>' + quotes[qIndex].quote + '</p>';
  var source = '<p class=source>' + quotes[qIndex].source;

  html += quote + source;

  if (quotes[qIndex].citation) {
    var citation =
      '<span class=citation>' + quotes[qIndex].citation + '</span>';
    html += citation;
  }
  if (quotes[qIndex].year) {
    var year = '<span class=year>' + quotes[qIndex].year + '</span>';
    html += year;
  }
  html += '</p>';
  print(html);
}

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document
  .getElementById('loadQuote')
  .addEventListener('click', printQuote, false);

// Remember to delete the comments that came with this file, and replace them with your own code comments.
