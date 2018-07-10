// Don't worry about this line too much right now. It
// just uses the svg.js library to prepare to draw shapes.
// Do notice that it references the id of the div we made
// in the previous step.
var drawing = SVG('drawing-area');
// Draw a rectangle. The first number is the width,
// the second number is the height.

var drawFlower = function(x,y) {
    var flowerGroup = drawing.group(x.y)
        .center(x,y)

    drawing
    .ellipse(10,100)
    .fill('yellow')
    .center(300,300)
    .addTo(flowerGroup)
    drawing
    .ellipse(10,100)
    .fill('orange')
    .center(300,300)
    .rotate(45)
    .addTo(flowerGroup)
    drawing
    .ellipse(10,100)
    .fill('yellow')
    .center(300,300)
    .rotate(-225)
    .addTo(flowerGroup)
    drawing
    .ellipse(10,100)
    .fill('orange')
    .center(300,300)
    .rotate(90)
    .addTo(flowerGroup)
    drawing
    .ellipse(10,100)
    .fill('yellow')
    .center(300,300)
    .rotate(60)
    .addTo(flowerGroup)
    drawing
    .ellipse(10,100)
    .fill('yellow')
    .center(300,300)
    .rotate(30)
    .addTo(flowerGroup)
    drawing
    .ellipse(10,100)
    .fill('orange')
    .center(300,300)
    .rotate(120)
    .addTo(flowerGroup)
    drawing
    .ellipse(10,100)
    .fill('yellow')
    .center(300,300)
    .rotate(135)
    .addTo(flowerGroup)
    drawing
    .ellipse(10,100)
    .fill('orange')
    .center(300,300)
    .rotate(330)
    .addTo(flowerGroup)
    drawing
    .circle(30,180)
    .fill('red')
    .center(300,300)
    .addTo(flowerGroup)
    drawing
    .ellipse(5,70)
    .fill('brown')
    .center(300,350)
    .rotate(180)
    .addTo(flowerGroup)
     drawing
    .circle(30,180)
    .fill('brown')
    .center(300,300)
    .addTo(flowerGroup)
    drawing
    .ellipse(30,10)
    .fill('green')
    .center(290,358)
    .addTo(flowerGroup)
    .rotate(45)
    drawing
    .ellipse(30,10)
    .fill('green')
    .center(312,358)
    .addTo(flowerGroup)
    .rotate(-45)

}

drawFlower(-100,-200)
drawFlower(200,-200)
drawFlower(500,-200)
drawFlower(-100,50)
drawFlower(200,50)
drawFlower (500,50)
drawFlower (-100,300)
drawFlower( 200,300)
drawFlower(500,300)

