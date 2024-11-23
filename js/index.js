var quotesArray = [
    {
        theQuote: "“Be yourself; everyone else is already taken.”",
        theQuoteAuthor: "― Oscar Wilde"
    },
    {
        theQuote: "“So many books, so little time.”",
        theQuoteAuthor: "― Frank Zappa"
    },
    {
        theQuote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        theQuoteAuthor: "― Albert Einstein"
    },
    {
        theQuote: "“A room without books is like a body without a soul.”",
        theQuoteAuthor: "― Marcus Tullius Cicero"
    },
    {
        theQuote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        theQuoteAuthor: "― Bernard M. Baruch"
    },
    {
        theQuote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        theQuoteAuthor: "― Dr. Seuss"
    },
    {
        theQuote: "“Be the change that you wish to see in the world.”",
        theQuoteAuthor: "― Mahatma Gandhi"
    },
    {
        theQuote: "“In three words I can sum up everything I've learned about life: it goes on.”",
        theQuoteAuthor: "― Robert Frost"
    },
    {
        theQuote: "“If you tell the truth, you don't have to remember anything.”",
        theQuoteAuthor: "― Mark Twain"
    },
    {
        theQuote: "“A friend is someone who knows all about you and still loves you.”",
        theQuoteAuthor: "― Elbert Hubbard"
    }
];

var randomQuoteIndexFromPreviousIteration = 0;

function generateQuote() {
    // if (randomQuoteIndex === -2) {
    //     randomQuoteIndexFromPreviousIteration = randomQuoteIndex = Math.floor((Math.random() * quotesArray.length));
    //     document.getElementById("quote").innerText = quotesArray[randomQuoteIndex].theQuote;
    //     document.getElementById("quote-author").innerText = quotesArray[randomQuoteIndex].theQuoteAuthor;
    // } else {

    //     // console.log(randomQuoteIndex);
    //     document.getElementById("quote").innerText = quotesArray[randomQuoteIndex].theQuote;
    //     document.getElementById("quote-author").innerText = quotesArray[randomQuoteIndex].theQuoteAuthor;
    //     randomQuoteIndexFromPreviousIteration = randomQuoteIndex;
    // }
    var randomQuoteIndex;
    while (true) {
        randomQuoteIndex = Math.floor((Math.random() * quotesArray.length));
        if (randomQuoteIndex != randomQuoteIndexFromPreviousIteration) {
            break;
        }
    }
    randomQuoteIndexFromPreviousIteration = randomQuoteIndex //save the current value
    // console.log(randomQuoteIndexFromPreviousIteration);
    document.getElementById("quote").innerText = quotesArray[randomQuoteIndex].theQuote;
    document.getElementById("quote-author").innerText = quotesArray[randomQuoteIndex].theQuoteAuthor;

}