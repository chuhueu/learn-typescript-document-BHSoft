//Interface "A way to name an object type"
//Type Alias: "A type alias is exactly that - a name for any type"
type StudentAlias = {
    id: number;
    name: string;
    age?: number;
}
interface Student {
    id: number;
    name: string;
    age?: number; //optional
}
const studentA: StudentAlias = {
    id: 1,
    name: "Hieu"
}
const studentB: Student = {
    id: 2,
    name: "Chu",
    age: 21
}
//console.log(studentA, studentB);
interface Contact {
    email: string;
    phone: number;
}
interface Profile extends Student, Contact {};
type ProfileAlias = Student & Contact;
const profileA: Profile = {
    id: 1,
    name: "Hieu",
    age: 21,
    email: "aaaa",
    phone: 1111
}
console.log(profileA);
