let cars = [ 'Chevelle', 
    'Datsun 500', 
    'Pinto',
    'Tesla Model S',
    'PT Cruiser',
    'Focus',
    'Camry',
    'Winnebago',
    'Lambo',
    'Hotwheels',
];
let gimmieACar = function(){
    let rando = Math.floor(Math.random() * cars.length);
    console.log( 'in gimmieACar', cars[ rando ] );
    return cars[ rando ];
};// end function

module.exports = { randomCar: gimmieACar };
