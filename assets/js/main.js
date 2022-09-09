const barValues = [30, 20, 50, 70, 90, 30, 20, 50, 70, 100, 30, 20];

let bars = document.querySelectorAll('.bar');
let barValueSpan = document.querySelectorAll('.bar-value');

let colors = [
    'tomato',
    'dodgerblue',
    'mediumaquamarine',
    'slategray',
    'gray',
    'darkgray',
    'orangered',
    'pink',
    'brown',
    'burlywood'
];

var red = 243;
var green = 154;
var blue = 133;

bars.forEach((bar, i) => {
    bar.style.height = barValues[i] +'%';
    // bar.style.backgroundColor = colors[Math.floor(Math.random() * numberOfColors)];

    bar.style.backgroundColor = 'rgb('+ red +', '+ green +', '+ blue +')';
    red += 1;
    green -= Math.floor(Math.random() * 10);
    blue -= Math.floor(Math.random() * 10);

    barValueSpan[i].innerHTML = barValues[i] +'%';
});

let spans = document.querySelectorAll('.chart .horizontal-lines div span');

// Animation # 1
// spans.forEach(span => {
//     span.style.transform = 'scale(1)';
// });

// Animation # 2
// spans.forEach(span => {
//     span.style.width = '100%';
// });

let counter = document.querySelector('#counter');
let percentage = document.querySelector('#percentage');

var temp = setInterval(count, 20);
var num = 150;
var x = 0;

function count() {
    
    if(x <= 100) {
        percentage.innerHTML = x + '%';
    }

    counter.innerHTML = x++;
    
    if(x > num) 
        clearInterval(temp);
}