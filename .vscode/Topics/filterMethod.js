let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

// find the city whose population is greater than 3 million

// let cityWithMoreThanThreeMillionPopulation = cities.filter((city)=>{
//     return city.population > 3000000;
// })
//using arrow function
// let cityWithMoreThanThreeMillionPopulation = cities.filter((city)=> city.population > 3000000);
// console.log(cityWithMoreThanThreeMillionPopulation);

let sortByPopulation = cities.sort((a, b)=> a.population - b.population);
console.log(sortByPopulation);

let cityNames = cities.filter((city)=>{
        console.log(city.name);
})

