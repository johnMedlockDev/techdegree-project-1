// This is an array of varied quotes data
var quotes = [
  {
    quote:
      'Traders focus almost entirely on where to enter a trade. In reality, the entry size is often more important than the entry price',
    source: 'Jack D. Schwager',
    citation: 'Hedge Fund Market Wizards: How Winning Traders Win, p.240',
    year: 2012,
    tag: '#Forex'
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
    citation: 'Hedge Fund Market Wizards: How Winning Traders Win, p.29',
    tag: '#Options'
  },
  {
    quote:
      'The Heisenberg principle in physics provides an analogy for the markets. If something is closely observed, the odds are it is going to be altered in the process...The more a price pattern is observed by speculators, the more prone you are to have false signals. ',
    source: 'Bruce Kovner',
    citation: 'Hedge Fund Market Wizards: How Winning Traders Win, p.87',
    year: 1987,
    tag: '#Equities'
  },
  {
    quote:
      "Don't ever average losers. Decrease your trading volume when you are trading poorly; increase your volume when you are trading well. Never trade in situations where you don't have control. For example, I don't risk significant amounts of money in front of key reports, since that is gambling, not trading.",
    source: 'Paul Tudor Jones',
    tag: '#Equities'
  }
];
// A random quote generator based on the min and max index of the quotes array.
function getRandomQuote() {
  var rngSelector = quotes[Math.floor(Math.random() * quotes.length) + 1];

  return rngSelector;
}
// random color picker background
function randomRGB() {
  return Math.floor(Math.random() * 256);
}
// rbg css changer for background
function randomColor() {
  var color = 'rgb(';
  color += randomRGB() + ',';
  color += randomRGB() + ',';
  color += randomRGB() + ')';
  return color;
}
// This is a print function for targeting the quote-box div in the html.
function print(html) {
  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = html;
}
// This function is the quote format construct.
function printQuote() {
  // Random index generation
  var quoteObj = getRandomQuote();
  var html = '';
  console.log(quoteObj);
  // Background color
  var bgColor = randomColor();
  document.body.style.backgroundColor = bgColor;

  // Basic quote info
  var quote = '<p class=quote>' + quoteObj.quote + '</p>';
  var source = '<p class=source>' + quoteObj.source;

  html += quote + source;

  // Conditions for addition citation information.
  if (quoteObj.citation) {
    var citation = '<span class=citation>' + quoteObj.citation + '</span>';
    html += citation;
  }
  // Conditions for addition year information.
  if (quoteObj.year) {
    var year = '<span class=year>' + quoteObj.year + '</span>';
    html += year;
  }
  // Conditions for addition tag information.
  if (quoteObj.tag) {
    var tag = '<span class=tag> ' + quoteObj.tag + '</span>';
    html += tag;
  }

  // Displays the new random  quote.
  html += '</p>';
  print(html);
}

document
  .getElementById('loadQuote')
  .addEventListener('click', printQuote, false);

var intervalID = window.setInterval(printQuote, 20000);
