import { Ibook } from "../Interface/ibook";

export class Book implements Ibook {
    constructor(public book_id : number,
       public type_id : number,
       public title : String,
       public longdesc : String,
       public shortdesc : String,
       public price : number,
       public releaseDate : Date,
       public isRentable : Boolean,
       public isInLibrary : Boolean,
       public rentAmount : number,
       public minimumRentDays : number,
       public imagePath : String){
        }

}
