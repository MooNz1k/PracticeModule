export interface Customer {
    index : number,
    age: number,
    name: FullName,
    email: string,
    phone: number,
    address: string
}
 
export interface FullName {
    first : string,
    last : string
}