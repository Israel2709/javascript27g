const todos = [
  {
    title: "todo 1",
    completed: true,
    priority: 0,
  },
  {
    title: "todo 2",
    completed: false,
    priority: 0,
  },
  {
    title: "todo 3",
    priority: 1,
    completed: false,
  },
  {
    title: "todo 4",
    priority: 5,
    completed: false,
  },
  {
    title: "todo 5",
    priority: 3,
    completed: false,
  },
];

let nationalities = [
  "MX",
  "IE",
  "DE",
  "UA",
  "GB",
  "AU",
  "NO",
  "AU",
  "IE",
  "FR",
  "MX",
  "GB",
  "IE",
];

let singleNats = nationalities.reduce((accum, curr) => {
  return accum.includes(curr) ? accum : [...accum, curr];
}, []);

console.log(singleNats);

const filterByUncompleted = (todosArray) =>
  todosArray.filter(({ completed }) => !completed);

const filterWithReduce = (todosArray) =>
  todosArray.reduce((accum, curr) =>
    !curr.completed ? [...accum, curr] : accum
  );

let todosTest = filterByUncompleted(todos);
console.log(todosTest);

const filterByUncompletedAndPriority = (todosArray) =>
  todosArray.filter(({ completed, priority }) => !completed && priority >= 3);

let todosTest2 = filterByUncompletedAndPriority(todos);
console.log(todosTest2);

let charArray = ["I", "s", "r", "a"];

let name = charArray.reduce((accum, current) => {
  return accum + current;
}, "");
console.log(name);
