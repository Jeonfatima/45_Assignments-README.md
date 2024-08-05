// Define a type for the car object with dynamic properties
type Car = {
    manufacturer: string;
    model: string;
    [key: string]: any;
};

// Define the function to create the car object
function createCar(manufacturer: string, model: string, ...options: [string, any][]): Car {
    // Initialize the car object with mandatory properties
    let car: Car = {
        manufacturer: manufacturer,
        model: model
    };

    // Add optional properties to the car object
    for (let [key, value] of options) {
        car[key] = value;
    }

    return car;
}

// Call the function with required information and additional properties
let myCar = createCar("Toyota", "Corolla", ["color", "blue"], ["sunroof", true]);

// Print the car object to verify the information
console.log(myCar);
