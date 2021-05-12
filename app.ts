function add(number1: number, number2: number, showresult: boolean, thephrase: string){
   
    if(typeof number2 !== "number" || typeof number1 !== "number"){
        console.log("Invalid inputs");
    } //this runtime check is not  neccessary and can be avoided using TypeScript
    const result = number1 + number2;
    if(showresult){
       console.log(thephrase + result);
   }else {
    return number1 + number2;
   }
}

const n1 = 5;
const n2 = 6;
const printresult = true;
const phrase = "The input is: ";
const restult = add(n1, n2, printresult, phrase);

enum Permission { READ, UPDATE, SAVE, DELETE}

const person: { //ts explicit representation of an objects type
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; //tuple -> fixed length and type array
    permission: Permission //enum
} = {
   name: "Bora",
   age: 25,
   hobbies: ["Sports", "Cooking"],
   role: [1, "admin"],
   permission: Permission.READ
};
if(person.permission === Permission.READ){
    console.log("Permission valid: " + person.permission);
}
for (const hobby of person.hobbies){
    console.log(hobby);
}

//union types
function combine(input1: number | string, input2: number | string){
    let result;
    if (typeof input1 === "number" && typeof input2 === "number"){
        console.log("here");
        result = input1 + input2;
    } else {
        console.log("here 2");
        result = input1.toString() + input2.toString();
    }    
    return restult;
}
const combination = combine(40,50);
console.log(combination);