const array1 = [1, 2, 3, 4, 5, 5, 5];
const array2 = [2, 30, 30, 40, 5, 3, 4, 8, 9, 30];


const statsFinder = array => {
 let meanResult = 0;
 let modeResult = 0;

  const arrObj = {};
  array.forEach(element => {
    if(!arrObj[element]) {
      arrObj[element] = 1;
    } 
    else {
      arrObj[element] = arrObj[element] + 1;
    }
  });
  
  let maxValue = 0;
  let maxValueKey = []; 
  for (let key in arrObj) {
    const value = arrObj[key]; 
    if(value > maxValue) {
      maxValue = value; 
      maxValueKey = key;
      modeResult = parseInt(maxValueKey);
    }
  } 
  
    let total = 0;
for (let i=0; i<array.length;i++) {
    total = total + array[i];
    meanResult = total/array.length;
} return [meanResult, modeResult];
}


console.log(statsFinder(array1)); 
console.log(statsFinder(array2)); 

