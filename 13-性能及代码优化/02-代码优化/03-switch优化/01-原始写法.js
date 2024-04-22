/**
 * @Author liming
 * @Date 2023/10/25 9:34
 **/
let color = "red"
function printBlackBackground(){
    console.log('black')
}
function printRedBackground(){
    console.log('red')
}

function printBlueBackground(){
    console.log('blue')
}

function printGreenBackground(){
    console.log('green')
}

function printYellowBackground(){
    console.log('yellow')
}
switch(color) {
    case 'black':
        printBlackBackground();
        break;
    case 'red':
        printRedBackground();
        break;
    case 'blue':
        printBlueBackground();
        break;
    case 'green':
        printGreenBackground();
        break;
    default:
        printYellowBackground();
}
