const user = {id: 1, name: 'Gorib Amir', job:'actor'};
// JavaSript Object Notation (JSON)
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);

/**
 * { id: 1, name: 'Gorib Amir', job: 'actor' }
 * {"id":1,"name":"Gorib Amir","job":"actor"}
 */

const shop = {
    owner: 'Alia',
    address: {
        street: "konapara jatrabari",
        city: "Ranvir",
        country: "BD"
    },
    products: ['laptop', "keybord", 'monitor', "mic"],
    revenue: 45000,
    isOpen: true,
    isNew: false
};
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

const shopObj = JSON.parse(shopJSON);
console.log(shopObj)