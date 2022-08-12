
// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks(ç) => "IcannotBELIEVEit'snotBUTTER"


const str = 'Pl ayTha tF u nkyM usi c ';

const removeBlanks = str.replaceAll(' ', '');
console.log(removeBlanks);



// getDigits("abc8c0d1ngd0j0!8") => 801008

// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680 

function getDigits(str) {
    let newNumStr = ''
    for(let char in str){
        if(!isNaN(str[char])) {
            newNumStr +=[char]
        }
    }
    return Number(newNumStr)
}
 
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"))



// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 

// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".



function acronym(str) {
    const ac = str
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase('');
  
    return ac;
  }
  
  console.log(acronym("there's no free lunch - gotta pay yer way"));
  console.log(acronym("Live from New York, it's Saturday Night!"));
  


  function countNonSpaces(str){

  }





  function count (string) {
    return string.split('').reduce(function(counts,char){
      counts[char] = (counts[char]||0) + 1;
      return counts;
    },{});
  }
  console.log(count('Hello World'));

  

  const countThis = ['Honey pie, you are driving me crazy'];

  function thaiteaCounter(inputs){
    let counter = 0;
    for(const input in inputs) {
        if(inputs[input] != [' ']) counter ++;
    }
    return counter;
  }
  
  console.log(thaiteaCounter('Honey pie, you are driving me crazy'));

  function removeShortString(arr,len){
    let thisString = []
    let index = 0

    for(let value in arr){
        if(arr[value].length >= len) {
            thisString[index++] = arr[value]
        }
    
    }
    return thisString
  }

  console.log(removeShortString(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3))