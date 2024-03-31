// 1.class movie

/*
class movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating =rating;
    }
    static getPG(arr) {
        let pgArray = arr.filter(movie =>movie.rating == "PG");
         return pgArray;
    }
}

const a = new movie("Casino Rayale","Eon Production","PG13");
const b = new movie("leo","7-screen studio", "PG");
const c = new movie("vikram","RKFI");
const d = new movie("Master","Xavier Britto","PG13");
const e = new movie("Done","lyca","R");

console.log(movie.getPG([a,b,c,d,e]));
*/
//----------------------------------------------------------------------------------------------------------------------

//2. class circle:
/*
class Circle{
    constructor(radius,color) {
        this.radius = radius;
        this.color = color;
    }

    get Radius() {
        return this.radius;
    }
    set Radius(n){
        this.radius = n;
    }
    get Color() {
        return this.color;
    }
    set Color(c){
        this.radius = c;
    }
    get toString() {
        return `"Circle[radius= ${this.radius},color= ${this.color}]"`;
    }
    get area(){
        return Math.PI*Math.pow(this.radius,2)
    }
    get circumference(){
        return 2*Math.PI*this.radius
    }
}
const obj =new Circle(1.0,"red")
console.log(obj.Color);
console.log(obj.Radius);
console.log(obj.toString);
console.log(obj.area);
console.log(obj.circumference);

*/

//------------------------------------------------------------------------------------------------------

//3. Write a "person" class to hold all the details:
/*

class Person {

    constructor(name, age, occupation) {
    
    this.name = name;
    this.age = age;
    this.occupation = occupation;
    
    }
    
    }
    
    const person1 = new Person("Priya", 30, "Software Engineer");
    const person2 = new Person("Megala",29,"Softwate testing");
    const person3 = new Person("Praveen",31,"Data science");
    const person4 = new Person("Uma",35,"Web developer");
   
    console.log(person1.name);
    console.log(person1.age);
    console.log(person1.occupation);
    
    console.log(person2.name);
    console.log(person2.age);
    console.log(person2.occupation);

    console.log(person3.name);
    console.log(person3.age);
    console.log(person3.occupation);

    console.log(person4.name);
    console.log(person4.age);
    console.log(person4.occupation);

    console.log(`All the person Name are "person1":${person1.name}
    "person2":${person2.name}
    "person3":${person3.name}
    "person4":${person4.name}`)

*/ 
//--------------------------------------------------------------------------------------------------

//4.Write a class to calculate the Uber price:
/*

class UberPriceCalculator {
    constructor() {
      this.baseFare = 48;
      this.bookingFare = 56;
      this.costperKilometer = 13;
      this.costperMinute = 3.5;
    
    }
  
    calculatePrice(distanceInKilometers, timeInMinutes) {
      const distanceCost = this.costperKilometer * distanceInKilometers;
      const timeCost = this.costperMinute * timeInMinutes;
  
    
      const totalPrice = this.baseFare + distanceCost + timeCost + this.bookingFare;
  
      return totalPrice;
    }
  }
  
  const calculator = new UberPriceCalculator();
  const distanceInKilometers = 9.49; 
  const timeInMinutes = 16; 
  
  const estimatedPriceINR = calculator.calculatePrice(distanceInKilometers, timeInMinutes);
  console.log(`Estimated Uber price in INR: ₹${estimatedPriceINR}`);

  */