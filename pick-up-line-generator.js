// TODO: Select a new (random) pick up lines saying from the data stored in the
// `linesList` variable. (HINT: You will use `Math.floor()` and
// `Math.random()` to accomplish this.) Use this data to update the
// `innerText` of the `#pick-up-line-text` element.
var linesList = [
    "I hope you know CPR, because you just took my breath away!",
    "So, aside from taking my breath away, what do you do for a living?",
    "I ought to complain to Spotify for you not being named this week’s hottest single.",
    "Are you a parking ticket? ‘Cause you’ve got ‘fine’ written all over you.",
    " Your eyes are like the ocean; I could swim in them all day.",
    "When I look in your eyes, I see a very kind soul.",
    "If you were a vegetable, you’d be a ‘cute-cumber.’",
    "Do you happen to have a Band-Aid? ‘Cause I scraped my knees falling for you.",
    " I never believed in love at first sight, but that was before I saw you.",
    "I didn’t know what I wanted in a woman until I saw you.",
    "I was wondering if you could tell me: If you’re here, who’s running Heaven?",
    "No wonder the sky is gray (or dark, if at night)—all the color is in your eyes.",
    "You’ve got everything I’ve been searching for, and believe me—I’ve been looking a long time.",
    "You’re like a fine wine. The more of you I drink in, the better I feel.",
    "You’ve got a lot of beautiful curves, but your smile is absolutely my favorite",
    "Are you as beautiful on the inside as you are on the outside?",
    "If being sexy was a crime, you’d be guilty as charged.",
    "I was wondering if you’re an artist because you were so good at drawing me in.",
    "It says in the Bible to only think about what’s pure and lovely… So I’ve been thinking about you all day long.",
    "Do you have a map? I just got lost in your eyes.",
    "I’d like to take you to the movies, but they don’t let you bring in your own snacks.",
    "You know what you would look really beautiful in? My arms.",
    " I would never play hide and seek with you because someone like you is impossible to find.",
    "Are you a magician? It’s the strangest thing, but every time I look at you, everyone else disappears.",
    "I think there’s something wrong with my phone. Could you try calling it to see if it works?",
    "Hi, I just wanted to thank you for the gift. (pause) I’ve been wearing this smile ever since you gave it to me."
];

var generatePickUpLine = function() {
    // This is where your code for the Pick Up Line generator goes.
    // You will use the linesList variable defined lower in this file
    // to supply your pick up line with text.


    // TODO: Grab the paragraph with the ID
    // `pick-up-line-text` to be able to insert text into that element.


    // TODO: Update the Previous Pick Up Lines list with the current `innerHTML`
    // value of `#pick-up-line-text`. Follow these steps:
    // 1. Create a new `li` element with the `document.createElement()` method.
    //empty li
    var lineElement = document.createElement("li");
    // 2. Set the `innerHTML` of that element equal to the `innerHTML` of
    //    the `#pick-up-line-text` element.
    //adds test to p
    var pickUpLineText = document.getElementById('pick-up-line-text');
    //sets the empty li to the content of the p
    lineElement.innerHTML = pickUpLineText.innerHTML;
    // 3. Select the `#previous-pick-up-lines` container and use
    //    `appendChild()` to append the new `li` element you created above.
    var usedLines = document.getElementById("previous-pick-up-lines");
    usedLines.appendChild(lineElement);

    // 4. You should see the previous pick up line showing up in the list.
    //selectes a random pick up line

    // TODO: Select a new (random) pick up line showing from the data stored in the
    // `linesList` variable. (HINT: You will use `Math.floor()` and
    // `Math.random()` to accomplish this.) Use this data to update the
    // `innerText` of the `#pick-up-line-text` element.

    pickUpLineText.innerText = linesList[Math.floor(Math.random() * linesList.length)];
}


// The following data list is provided for you to use in your code.