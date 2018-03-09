

const COLORS = [
    '#EF5350', '#EC407A', '#AB47BC', '#7E57C2', '#5C6BC0', '#42A5F5', '#29B6F6', 
    '#26C6DA', '#26A69A', '#66BB6A', '#9CCC65', '#FF7043', '#8D6E63' 

];

const random_color = getRandomColorFromArray(COLORS);

export function getRandomColorFromArray(colorsArray){
    return COLORS[Math.floor(Math.random() * (colorsArray.length - 0) + 0)];
}

export function getRandomColor(){
    return random_color;
}