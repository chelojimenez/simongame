bottonColors = ["red", "blue", "green", "yellow"];
gamePatern = [];

randomChosenColor = bottonColors[nextSequence()];

console.log(randomChosenColor);

gamePatern.push(randomChosenColor);

var button = $("#" + randomChosenColor).select();

// animate it
button.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);



function nextSequence()
{
    var randomNumber = (Math.floor(Math.random() * 4));
    console.log(randomNumber);
    return randomNumber;
}
