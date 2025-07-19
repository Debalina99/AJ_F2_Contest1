/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((item) => {
    if (item.profession === "developer") {
      console.log(item);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((item) => {
    if (item.profession === "developer") {
      console.log(item);
    }
  });
}

let obj = { id: 4, name: "susan", age: "20", profession: "intern" };
function addData() {
  //Write your code here, just console.log
  arr.push(obj);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  let res = arr.filter((item) => item.profession !== "admin");
  console.log(res);
}

let arr2 = [
  { id: 5, name: "Dan", age: "18", profession: "3D Artist" },
  { id: 6, name: "jam", age: "36", profession: "HR" },
  { id: 7, name: "kylie", age: "25", profession: "QA" },
];
function concatenateArray() {
  //Write your code here, just console.log
  let res = arr.concat(arr2);
  console.log(res);
}