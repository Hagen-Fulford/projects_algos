var firstName = "Gareth";
var lastName = "O'Neil";
var age = 38;
var height = "5 feet 9 inches";
console.log(firstName);




// PUSH
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");

console.log(fruits)

// POP

const thailand = ['Gang Som', 'Pad Thai', 'Som Tom'];
thailand.pop();

console.log(thailand)


// INSERT AT 

const items = ['Atlas', 'Zealand', 'Summit']

const insertItem = (arr,index, newItem)=>[
    ...arr.slice(0,index),
    newItem,
    ...arr.slice(index)
]


const result = insertItem(items, 1, 'Ezra')
console.log(result)

function insert (arr,index,newItem) {

    for (let x = arr.length; x >= newItem; x--){
        arr[x] = arr[x-1]

    }
    arr[index] = newItem 

    return arr
}

console.log(insert([1,2,3,4,], 1, 1000))