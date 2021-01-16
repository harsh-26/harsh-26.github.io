export interface Ibook {
    book_id : number,
    type_id : number,
    title : String,
    longdesc : String,
    shortdesc : String,
    price : number,
    releaseDate : Date,
    isRentable : Boolean,
    isInLibrary : Boolean,
    rentAmount : number,
    minimumRentDays : number,
    imagePath : String
}
