export class AddReservationModel{
    yachtId: number;
    startDate: Date;
    endDate: Date;

    constructor(){
        this.yachtId = 0;
        this.startDate = new Date();
        this.endDate = new Date();
    }
}