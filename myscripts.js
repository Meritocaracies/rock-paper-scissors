// define function getComputerChoice
function getComputerChoice(){
   let rand = Math.floor(Math.random() * 101);
if (rand >= 66) {
    return 'Rock'
}
else if (rand >= 33) {
    return 'Paper'
}
else {
    return 'Scissors'
}
}
console.log(getComputerChoice())
// return rock, paper, scissors