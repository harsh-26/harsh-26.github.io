import { Iusers } from "../Interface/iuser";

export class User implements Iusers {
    constructor(
    public user_id : number,
    public name : String,
    public email:String,
    public password:String,
    public mobileno:number,
    public address:String,
    public pincode : number,
    public occupation : String,
    public dob : Date,
    public loyalty_pts : number,
    public deactive_flag : boolean
    ) {
        
    }
    
}
