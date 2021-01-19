import { Icart } from "../Interface/icart";

export class Cart implements Icart{
    constructor(
        public book_id : number,
        public user_id :number
    ){}
}
