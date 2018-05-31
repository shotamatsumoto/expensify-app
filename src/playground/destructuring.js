const person = {
  name: 'Takumi',
  age: 28,
  location: {
    city: 'Phnom Penh',
    temp: 27
  }
};

const { name: firstName = 'Anonymous', age } = person;
// const name = person.name;
// const age = person.age;

console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
  console.log(`It's ${temperature} in ${city}.`);
}

const book = {
  title: 'Star Wars',
  author: 'Disney',
  publisher: {
    // name: 'Penguin'
  }
};

const { name: publisherName = 'Self-published' } = book.publisher;

console.log(`${publisherName}`);


//
// Array destructuring
//

const address = ['#45a St. 464', 'Toul Toum Poung', 'Phnom Penh', '11231'];

const [street, town, state, zip] = address;

console.log(`You are in ${city} ${state}.`);



const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);
