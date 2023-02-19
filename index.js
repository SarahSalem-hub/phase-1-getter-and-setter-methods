// Add your Circle class here
class Circle{
    // #diameter
    // #circumference
    // #area 
    
    constructor(radius){
        this.radius = radius;
    }

    get diameter(){
        return this.radius * 2
    }

    get circumference(){
        return this.diameter * Math.PI
    }
    get area(){
        return Math.PI * this.radius **2
    }

    set diameter(value){
        this.radius = value/2
    }
    set circumference(value){
        this.radius = value /(2 * Math.PI)
    }
    set area(value){
        this.radius = Math.sqrt(value/Math.PI)
    }
}