

/* CREATE A CAR OBJECT properties should include name of car, model, year of manufacture, 
start function, stop function.*/

const car = {
    carName:"corolla",
    carModel:"Toyota",
    carSpeed:200,
    yom:"1990",
    startFunction:"key start",
    breakFunction:"automatic",
    carColor:"black",
    transmission : function(){
        console.log("superfast");},
    dashboard: "luxurious",

};

console.log(car.startFunction);
console.log(car.carColor);
console.log(car.carSpeed);
console.log(car.transmission());

car.carName = "venza";
console.log(car.carName);

console.log[car["carName"]];

// disk key word for the next class //


