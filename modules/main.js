import arrayModule from "./arrays/main.js";
import stringsModule from "./strings/main.js";

console.log(arrayModule.filterById([{ id: 1 }, { id: 2 }], 2));

console.log(stringsModule.countChars("Koders"));

console.log(moment("12-25-1995", "MM/DD-YYYY"));

[{ id: 5 }];

const customFind = (data, idToSearch) => {
  for (let i = 0; i < data.length; i++) {
    let currentId = data[i];
    currentId === idToSearch;
    return data[i];
  }
};
