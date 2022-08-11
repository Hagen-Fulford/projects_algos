
// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks(ç) => "IcannotBELIEVEit'snotBUTTER"


const str = 'Pl ayTha tF u nkyM usi c ';

const removeBlanks = str.replaceAll(' ', '');
console.log(removeBlanks);



// getDigits("abc8c0d1ngd0j0!8") => 801008

// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680




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
  


