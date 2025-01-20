function secondLargest(arr) {
  const firstMax = Math.max(...arr);
  let secondMax = arr.filter((num) => num !== firstMax);
  secondMax = Math.max(...secondMax);
  return secondMax;
}

console.log(secondLargest([1, 23, 4, 200]));
