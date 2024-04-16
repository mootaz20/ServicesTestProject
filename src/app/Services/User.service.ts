import { User } from "../Models/User";

export class userService{
    users: User[]=[
        new User('Mary John','Female','Yearly','active'),
        new User('John smith','Male','Daily','active'),
        new User('Maya fa','Female','Monthly','InActive'),
    ];
    GetAllUser(){
        return this.users;
    }
    CreateNewUser(name: string,gender: string,subType: string,status: string){
        let user = new User(name,gender,subType,status);
        this.users.push(user);
    }   
}