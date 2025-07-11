

class shape{
    constructor(shape_name){
        this.name = shape_name;
    }
    shape_area(){
        return(`the shape ${this.name}\'s area is: ${this.area()}`);
    }  
    shape_Perimeter(){
        return(`the shape ${this.name}\'s Perimeter is: ${this.Perimeter()}`);

    }  
    toString(){
        if(this.name == "rectangle"){
        return(`the shape ${this.name}\'s area is: ${this.area()} and Perimeter is: ${this.Perimeter()} \n with height = ${this.h} and width = ${this.w}`);
        }
        else if(this.name == "square"){
        return(`the shape ${this.name}\'s area is: ${this.area()} and Perimeter is: ${this.Perimeter()} \n with side = ${this.s} `);
        }
        else{
        return(`the shape ${this.name}\'s area is: ${this.area()} and Perimeter is: ${this.Perimeter()} \n with radius = ${this.r}`);
        }






    } 

}

class rectangle extends shape{
    constructor(width, height){
    super("rectangle");
    this.w = width;
    this.h = height;
    }
    area(){
        return(this.h * this.w);
    }
    Perimeter(){
        return 2*(this.h + this.w);
    }
}

class square extends shape{
    constructor(side){
    super("square");
    this.s = side;
    }
    area(){
        return(this.s **2);
    }
    Perimeter(){
        return (this.s * 4); 
    }
}

class circle extends shape{
    constructor(radius){
    super("circle");
    this.r = radius;
    }
    area(){
        return(Math.PI * this.r ** 2);
    }
    Perimeter(){
        return(2 * Math.PI * this.r );
    }
}




// let rect = new rectangle(10, 15);
// let squ = new square(15);
// let cir= new circle(5);

// console.log(rect.shape_area());
// console.log(squ.shape_area());
// console.log(cir.shape_area());
// console.log(rect.shape_Perimeter());
// console.log(squ.shape_Perimeter());
// console.log(cir.shape_Perimeter());



export { shape, rectangle, square, circle };
