export class ReservationModel{
    id!: number;
    yachtId!: number;
    startDate!: Date;
    endDate!: Date;

    constructor(){
        this.startDate = new Date();
        this.endDate = new Date();
    }
}