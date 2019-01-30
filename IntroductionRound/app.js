const Person = require("./person");
const Teacher = require("./teacher");

const Student= require("./student");

const p = new Person("Richard", "Roe", "male", ["reading", "traveling"]);

p.sayHello();
p.tellHobbies();


const t = new Teacher("Jane", "Doe", "female", [], "programming");
t.sayHello();
t.tellHobbies();


const s = new Student("John","Lim", "male",["cooking","swimming"], "history");
s.sayHello();
s.tellHobbies();