

/*const COLORS = [
    '#EF5350', '#EC407A', '#AB47BC', '#7E57C2', '#5C6BC0', '#42A5F5', '#29B6F6', 
    '#26C6DA', '#26A69A', '#66BB6A', '#9CCC65', '#FF7043', '#8D6E63' 

];*/

// Is used to get a random color, for backgrounds and some font colors

const COLORS = [
    {primary: '#F44336' , secondary:'#FF1744' },
    {primary: '#E91E63' , secondary: '#F50057'},
    {primary: '#9C27B0'  , secondary: '#AA00FF'},
    {primary: '#673AB7' , secondary:'#651FFF' }

];

const random_color = getRandomColorFromArray(COLORS);

//In case we have another color array
export function getRandomColorFromArray(colorsArray){
    return COLORS[Math.floor(Math.random() * (colorsArray.length - 0) + 0)];
}

//Is used by the components
export function getRandomColor(){
    return random_color.primary;
}

//Is used by the components
export function getRandomColorSecondary(){
    return random_color.secondary;
}