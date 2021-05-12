function add(number1, number2, showresult, thephrase) {
    if (typeof number2 !== "number" || typeof number1 !== "number") {
        console.log("Invalid inputs");
    } //this runtime check is not  neccessary and can be avoided using TypeScript
    var result = number1 + number2;
    if (showresult) {
        console.log(thephrase + result);
    }
    else {
        return number1 + number2;
    }
}
var n1 = 5;
var n2 = 6;
var printresult = true;
var phrase = "The input is: ";
var restult = add(n1, n2, printresult, phrase);
var Permission;
(function (Permission) {
    Permission[Permission["READ"] = 0] = "READ";
    Permission[Permission["UPDATE"] = 1] = "UPDATE";
    Permission[Permission["SAVE"] = 2] = "SAVE";
    Permission[Permission["DELETE"] = 3] = "DELETE";
})(Permission || (Permission = {}));
var person = {
    name: "Bora",
    age: 25,
    hobbies: ["Sports", "Cooking"],
    role: [1, "admin"],
    permission: Permission.READ
};
if (person.permission === Permission.READ) {
    console.log("Permission valid: " + person.permission);
}
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
//union types
function combine(input1, input2) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        console.log("here");
        result = input1 + input2;
    }
    else {
        console.log("here 2");
        result = input1.toString() + input2.toString();
    }
    return restult;
}
var num1 = "20";
var num2 = "90";
var combination = combine(num1, num2);
console.log(combination);
