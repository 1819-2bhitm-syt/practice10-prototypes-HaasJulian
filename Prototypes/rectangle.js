


function Rectangle(length, width){
    this.length = length;
    this.width= width;
};

Rectangle.prototype.getArea = function(){

    return this.length * this.width;
};
Rectangle.prototype.getCircumference = function(){

    return 2*(this.length+ this.width);
};

module.exports = Rectangle;