const Square= require("./square");
const Rectangle = require("./rectangle");


let figures = [new Square(2), new Square(5), new Square(10), new Rectangle(5, 3), new Rectangle(10, 4)];
console.log();
for(let figure of figures){
    console.log(figure);
    console.log("Fläche: "+ figure.getArea()+"\n"+"Umfang :" +figure.getCircumference()+"\n");
}

