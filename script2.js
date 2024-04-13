// quote generator //

// Array of quotes
document.addEventListener('DOMContentLoaded', function() {
    var quotes = [
        "You can always retake a test but you can never relive a memory so grab some tequila and let's go party",
        "Life is not a waste of time and time is not a waste of life. So let's stop wasting time, get wasted and have the time of our life – Pitbull",
        "Liever te dik in de kist, dan weer een feestje gemist – René Karst",
        "I would have gone with you to the end, into the very fires of Mordor – Aragorn",
        "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light. – Albus Dumbledore",
        "One tequila, two tequila, three tequila, floor",
        "This for everybody going through tough times. Believe me, been there, done that. But every day above ground is a great day, remember that  – Pitbull",
        "Alcohol may be man's worst enemy, but the Bible says love your enemy.  – Frank Sinatra",
        "Do or do not. There is no try. – Yoda",
        "Give yourself a reason – Noah Kahan",
        "The sky is falling, the wind is calling. Stand for something or die in the morning. – Kendrick Lamar",

    ];

    // Function to generate a random quote
    function generateQuote() {
        var randomNumber = Math.floor(Math.random() * quotes.length);
        var quoteDisplay = document.getElementById('quote');
        quoteDisplay.textContent = quotes[randomNumber];
    }

    // Initial call to generate a quote when the page loads
    generateQuote();

    // Event listener for the "New Quote" button
    document.getElementById('new-quote').addEventListener('click', generateQuote);
});
