class Student1 {
    id: number;
    name: string;
    masv: string;
    phone: number;
    constructor(options: Student1) {
        this.id = options.id;
        this.name = options.name;
        this.masv = options.masv;
        this.phone = options.phone;
    }
}
class Profile1 extends Student1{
    email: string;
    address: string;
    constructor(options: Profile1){
        super(options);
        this.email = options.email;
        this.address = options.address;
    }
}
const profile1 = new Profile1({
    id: 1,
    name: "hieu",
    masv: "11",
    phone: 12,
    email: "heea",
    address: "aaaa"
});

console.log(profile1);

