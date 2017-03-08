var names = ['Adam', 'Elina', 'Anthony'];
/*
names.forEach(function (name) {
  console.log('forEach', name);
});

names.forEach((name) => {
  console.log('arrow', name);
});

names.forEach((name) => console.log('arrow', name));
*/

var returnMe = (name) => {
  return name + '!';
};

console.log(returnMe('Adam'));

var person = {
  name: 'Adam',
  greet: function () {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name);
    });
  }
};

person.greet();

//Challenge Area
function add (a, b)  {
  return a+b;
}

//add statement arrow


//add expression arrow
// function addExp (a,b)  => {
//   return 'Arrow Exp: ' + (a+b);
// }

var addStatement = (a,b) => {
  return 'Arrow State: ' + (a+b);
};

var addExpression = (a,b) => 'Arrow Exp: ' + (a+b);

console.log(add(1,3));
console.log(add(9,0));

console.log(addStatement(1,3));
console.log(addStatement(9,0));

console.log(addExpression(1,3));
console.log(addExpression(9,0));