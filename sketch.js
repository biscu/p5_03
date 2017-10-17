var colorList = ['#3498db',
    '#1abc9c',
    '#e74c3c',
    '#ecf0f1'
];


function setup() {

    createCanvas(1000, 600);
    frameRate(10);
}

function draw() {
for(var x = 0; x < 3000; x += 70) {
    for(var y = 0; y < 1000; y += 50) {
    var index = floor(random() * colorList.length);
    var colorHex = colorList[index];
     fill(color(colorHex));
     noStroke();
      rect(x, y, 30,30);
    }
  }

}