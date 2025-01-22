let arr = [1,2,5,1,34,12,100]

//1. push()
arr.push(9,0);

//2. pop()
arr.pop();

//3. unshift()
arr.unshift(-1)

//4. shift()
arr.shift()

//5. splice()
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.splice(2, 0, "Lemon", "Kiwi");
  console.log(fruits);
}

//6. concat()
arr = arr.concat(0, 0, 0);
console.log(arr);

//7. slice()
//8. indexOf()
//9. lastIndexOf()
//10. includes()
//11. find()
//12. findIndex()
//13. filter()
//14. some()
//15. every()

//16. map()
const mapList = [98, 99, 76, 80];
const mapList2 = mapList.map((item) => item + 1);
console.log(mapList2);


//17. reduce()
//18. reduceRight()
//19. flat()
//20. flatMap()
//21. sort()
//22. reverse()
//23. join()
//24. toString()
//25. forEach()
//26. fill()
//27. copyWithin()

