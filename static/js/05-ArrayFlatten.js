const arrayMultiDim = [1, [2, 3, [4, 5, 6]], [3, 4], 10];

console.log("Original Array:", arrayMultiDim);

function flattenArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (Array.isArray(element)) {
      result = result.concat(flattenArray(element));
    } else {
      result.push(element);
    }
  }

  return result;
}

const flattenedArray = flattenArray(arrayMultiDim);
console.log("Flattened Array:", flattenedArray);

// const numbers = [175, 25, 50];
// let x = numbers.reduce(myFunc);
// function myFunc(total, num) {
//   return total - num;
// }
// console.log(x);

{
  const arrayMultiDim = [1, [2, 3, [4, 5, 6]], [3, 4], 10];

  console.log("Original Array:", arrayMultiDim);

  function flattenArray(arr) {
    return arr.reduce((accumulator, current) => {
      if (Array.isArray(current)) {
        return accumulator.concat(flattenArray(current));
      } else {
        return accumulator.concat(current);
      }
    }, []);
  }

  const flattenedArray = flattenArray(arrayMultiDim);
  console.log("Flattened Array part 2:", flattenedArray);
}
