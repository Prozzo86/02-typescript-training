class Customer {

    private _firstName: string;
    private _lastName: string;

    constructor(theFirst: string, theLast: string){

        this._firstName = theFirst;
        this._lastName = theLast;

    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string){
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string){
        this._lastName = value;
    }
}

let myCustomer = new Customer("Donald", "Trump");

// myCustomer.firstName = "Donald";
// myCustomer.lastName = "Trump";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

