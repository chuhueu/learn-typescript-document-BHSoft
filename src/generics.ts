//We’ve now added a type variable Type to the identity function. This Type allows us to capture the type the user provides (e.g. number), so that we can use that information later
function identity<Type>(arg: Type): Type {
    return arg;
}
//this version of the 'identity' function is generic, as it works over a range
let output = identity<string>("myString");

console.log(output);

