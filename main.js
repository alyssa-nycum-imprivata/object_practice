// Lightning Exercise 1

// Answer: Object

const car = {
    year: 2015,
    color: "red",
    make: "Ford",
    model: "Mustang"
};

// Lightning Excercise 2

// Answer: Array

const animals = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"];

// Lightning Excercise 3

// Objects 

const mother = {
    name: "Barbara",
    age: 54
};

const father = {
    name: "Garth",
    age: 56
};

const daughter = {
    name: "Alyssa",
    age: 30
};

const son = {
   name: "Chris",
   age: 27
};

// Array

const familyMembers = [mother, father, daughter, son];

// Lightning Exercise 4

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

console.log(wardrobe.height);
console.log(wardrobe.manufacturer);
console.log(wardrobe.contents);
console.log(wardrobe.depth);
console.log(wardrobe.width); 

wardrobe.material = "Cedar";
console.log(wardrobe.material);
console.log(wardrobe);

// Lightning Exercise 5

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

const building_dimensions = [empireStateBuilding.stories, empireStateBuilding.height, empireStateBuilding.squareFeet, empireStateBuilding.eastWestLength, empireStateBuilding.northSouthLength];

console.log(building_dimensions);

// Lightning Excercise 6

const building_information = [empireStateBuilding["address"], empireStateBuilding["constructionDate"], empireStateBuilding["cost"], empireStateBuilding["owner"], empireStateBuilding["architect"]];

console.log(building_information);

// Lightning Excercise 7

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

for (let i = 0; i < nashvilleSoftwareSchool.instructors.partTime.length; i++) {
    console.log(nashvilleSoftwareSchool.instructors.partTime[i]);
}

for (let i = 0; i < nashvilleSoftwareSchool.instructors.fullTime.length; i++) {
    console.log(nashvilleSoftwareSchool.instructors.fullTime[i]);
}

// Lightning Exercise 8

console.log(nashvilleSoftwareSchool.instructors.partTime[0]);

console.log(nashvilleSoftwareSchool.instructors.fullTime[4]);

// Practice Exercise

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

// Print the following sentence to the console: Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album.

console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[3]} Album.`);



