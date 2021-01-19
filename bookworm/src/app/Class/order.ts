import { Iorder } from "../Interface/iorder";

export class Order implements Iorder{
    constructor(
        public order_id :number,
        public user_id : number,
        public book_id : number,
        public order_amt : number,
        public order_date : Date,
        public discount_amt : number,
        public tax_amt : number,
    ){}
}
