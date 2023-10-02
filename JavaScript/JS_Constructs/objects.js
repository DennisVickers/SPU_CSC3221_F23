/*
* Objects
*/
const person = {
  firstName: "Tyler",
  lastName: "Vickers",
  birthDate: new Date("12/16/87"),
  email: "tdvickers@gmail.com",
  hobbies: ["Music","Rock Climbing"],
  address: {
    city: "Denver",
    state: "CO"
  },
  getAge: function() {
    const ms_diff = Date.now() - this.birthDate.getTime();
    const age_dt = new Date(ms_diff);
    const year = age_dt.getUTCFullYear();
    return (Math.abs(year - 1970));
  }
}

let v;

v = person;
v = person.firstName;
v = person.birthDate;
v = person.hobbies;
v = person.address.city;
v = new Date();
v = v.getFullYear();
v = person.getAge();


// Results
console.log(v);
