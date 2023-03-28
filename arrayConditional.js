let myArray = [
  { 
    name: "John",
    age: 25,
    profession: "Engineer"
  },
  { 
    name: "Sarah",
    age: 30,
    profession: "Doctor"
  },
  { 
    name: "Mike",
    age: 20,
    profession: "Designer"
  },
  { 
    name: "Kate",
    age: 35,
    profession: "Teacher"
  }
];

function youngMember(val) {

  if(val[2].age === 20) {
    return val[2];
  }

}

var answer = youngMember(myArray);
console.log(answer);
var foundTheTwentyYearOld = answer;
console.log(foundTheTwentyYearOld);