function forEachDemon() {
    const letter = ['a','b','n','o','ab','ab','bc','bc','n','n','n']
      let count = {}
      letter.forEach((item) => {
        if(count[item] != undefined) {
          count[item]++;
        } else {
          count[item] = 1;
        }
      })
  
      console.log(count)
  }

  function reduceMe() {
    const numbers = [1,2,3,4,5,6,7,9];
    const max = numbers.reduce(callback, -Infinity);
  
    const min = numbers.reduce(lowercb, Infinity);
  
    const total = numbers.reduce(totalcb);
  
    function callback(accum, value) {
      if (accum > value) {
        return accum;
      } else {
        return value;
      }
    }
  
    function lowercb(accum, value) {
      if (accum < value) {
        return accum;
      } else {
        return value;
      }
    }
  
    function totalcb(accum, value) {
      return accum + value;
    }
  
    console.log(max, min, total)
  
  }
  
  function mapperJS() {
    const numbers = [1,2,3,4,5,6,7,9]
      const objectS = [
        {id:1, name:"sde", quantity: 122.23, count: 2},
        {id:2, name:"sdea", quantity: 455.12, count: 2}
      ]
  
      const Outson = objectS.map(item => ({
        name: item.name,
        quantity: item.quantity * item.count
      }));
  
      console.log(Outson)
      
  }
  
  function filterTest() {
    const numbers = [1,2,3,4,5,6,7,9]
  
      const evenNo = numbers.filter(item => item % 2 === 0)
  
      console.log(evenNo)
  }
  
  function sliceTest() {
    const numbers = [1,2,3,4,5,6,7,9]
  
      const arrayOut = numbers.slice(-3);
  
      console.log(arrayOut)
  }

  function flatMod() {
    const arr = [1,[2,[3,[4,[5]]]]]
  
    const res = arr.flat(Infinity)
    console.log(res)
  }
  
  function fromArrayMet() {
    var str = 'mad man nexus'
    var strMod = str.replace(/\s/g,'')
    var reverseN = strMod.split('').reverse().join('')
    var reverseX = reverseN.split('').reverse().join('')
  
    const result = Array.from(reverseX,String)
    console.log(result)
  }
  
  function findDemon() {
    const names = ['cubby','tubby','sabnen'];
  
    const result = names.find(findSome)
  
    function findSome(item) {
      return item.length === 6
    }
  
    console.log(result)
  }
  
  function isPositive() {
    const numbers = [1,2,3,4,54,6,7,9]
  
    const isPositiveCheck = (item) => {
      return item > 0
    }
  
    const result = numbers.every(item => item !== 1)
    console.log(result)
  }
  
  function indexOf () {
    const indlude = ['ass','boob','pussy']
  
    const idx = indlude.indexOf('ass')
    console.log(idx)
  
  }
  
  function shiftDemon() {
    const numbers = [1,2,3]
    const firstNumber = numbers.shift(0); 
  
    console.log(numbers)
    console.log(firstNumber)
  }
  
  function unshiftDemon() {
    const numbers = [1,2,3]
    numbers.unshift(0); // insert in front of array
  
    console.log(numbers)
  }
  
  function stringReverse() {
    const str = 'hello my name'
  
    const result = str.split('').reverse().join('')
    console.log(result)
  }
  
  function reverseArray() {
    const numbers = [1,2,3,4,54,6,7,9]
    numbers.reverse();
    console.log(numbers)
  }
  
  function joinString() {
    const text = ['s','e','x'];
    const result = text.join('')
  
    console.log(result)
  }
  
  function IncludeTest() {
    const indlude = ['ass','boob','pussy']
  
    const res = indlude.includes('pussy')
  
    console.log(res)
  }
  
  function concatT() {
    const numbers = [1,2,3]
    const numbers2 = [4,5,6]
    const numbers3 = [7,8,9]
  
    const c = numbers.concat(numbers2, numbers3)
  
    console.log(c)
  }
  
  
  function sortArrays() {
    const numbers = [1,2,3,4,54,6,7,9]
  
    numbers.sort(compareFunction);
  
    function compareFunction(a,b) {
      return a - b;
    }
  
    console.log(numbers)
  
  }
  
  
  function spliceTest() {
    const numbers = [1,2,3,4,5,6,7,9]
  
      const outputT = numbers.splice(2,3)
  
      console.log(outputT)
  }

  const arrayObj = [
    {
      name: "Win",
      age: 25
    },
    {
      name: "Ton",
      age: 25
    },
    {
      name: "Jeff",
      age: 33
    },
    {
      name: "Boat",
      age: 26
    }
  ];
  
  maxAge()
  getAgeByName('Win')
  groupAge(arrayObj);
  
  function maxAge() {
    const ageOnly = arrayObj.map((item) => item.age);
    const findAgeMaxIdx = Math.max(...ageOnly);
    const ageMaxIdx = ageOnly.findIndex((item) => item === findAgeMaxIdx);
    //const nameIdx = arrayObj.find(item => item.name.indexOf(ageMaxIdx))
    const nameIdx = arrayObj[ageMaxIdx];
    console.log("1st Answer ", nameIdx.name);
    return nameIdx.name;
  }
  
  function getAgeByName(name) {
    const idx = arrayObj.findIndex((item) => item.name === name);
    console.log("2nd Answer ", arrayObj[idx].age);
    return arrayObj[idx].age;
  }
  
  function groupAge(arrayObj) {
  
      const sameAge = {}
  
      arrayObj.forEach((people) => {
          const age = people.age;
          sameAge[age] = sameAge[age] || [];
          sameAge[age].push(people.name);
          
      })
      const result = Object.values(sameAge)
      console.log(result)
  }

  function getQuestionPart(phrases) {

    if (phrases.length === 3) {

        var questionParts = [];

        for (let i = 0; i < phrases[0].length; i++) {
            const substring = phrases[0].substring(0, i + 1);
            
            if (phrases.every(phrase => phrase.startsWith(substring))) {
                questionParts.push(substring);
            } else {
                break;
            }
        }
        console.log(questionParts)
        return questionParts;

        // for (let index = 0; index < phrases.length; index++) {
        //     const commonPart = phrases.reduce((common, current) => {
        //         const commonLength = Math.min(common.length, current.length);
        //         for (let i = 0; i < commonLength; i++) {
        //           if (common[i] !== current[i]) {
        //             return common.substring(0, i);
        //           }
        //         }
        //         return common.substring(0, commonLength);
        //       }, phrases[index]);
        //     console.log(commonPart);
        //     const question = phrases[index].replace(commonPart, "").trim();
        //     questionParts.push(question);
        // }
        // console.log(questionParts)
        // return questionParts

    } else {
        console.log(new Error("Invalid input"))
        return new Error("Invalid input");
    }
}