bottonColors = ["red", "blue", "green", "yellow"];
gamePatern = [];

randomChosenColor = bottonColors[nextSequence()];

gamePatern.push(randomChosenColor);



function nextSequence()
{
    var randomNumber = Math.floor(Math.random() * 3) + 1;
    return randomNumber;
}
