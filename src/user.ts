export class Users {
public Id: number;
public name: string;
public pwd:string;
public email:string;
public phone:string;

constructor(Id:number,name: string,pwd:string,email:string) {
this.Id = Id;
this.name = name;
this.pwd = pwd;
this.email = email;
this.phone;
}
}
