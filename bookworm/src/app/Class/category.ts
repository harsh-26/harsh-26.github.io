import { Icategory } from "../Interface/icategory";

export class Category implements Icategory {
    constructor(public category_id : number,
        public category_name : String,
        public category_desc : String){}
}
