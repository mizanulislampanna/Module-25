// handle purple Button
const btn = document.getElementById('button-1');
btn.onclick = makePurple;

function makePurple(){
    document.body.style.backgroundColor = 'purple';
}


// Handle red Button
function makeRed(){
    document.body.style.backgroundColor='pink';
   
}
// green button with anonymous function 
const greenButton = document.getElementById('green-button');
greenButton.onclick = function(){
    document.body.style.backgroundColor ='green';
}
// golden button with add event lestner
const goldenButton = document.getElementById('golden-button');
goldenButton.addEventListener('click',makeGoldenRod);
function makeGoldenRod(){
    document.body.style.backgroundColor ='goldenrod';
}
//Direct Shortcut event lestener.
document.getElementById('light-blue').addEventListener('click', function(){document.body.style.backgroundColor='lightblue';})
    
