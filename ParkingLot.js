class ParkingLot {
// Add the methods here

    parkingSlots = [];
    constructor(slots){
        for (let k =0; k<slots; k++){
            this.parkingSlots.push({
                occupied: false,
                slot: k,
                carId: null
            })
        }
        console.log(this.parkingSlots.length)
    }

    park(carId){
        
        let parked = false;
        for (let i=0; i< this.parkingSlots.length; i++){
            if (!this.parkingSlots[i].occupied){
                this.parkingSlots[i].occupied = true;
                this.parkingSlots[i].carId = carId;
                parked = true;
                break;
            }
        }
        return parked;
    }
    
    getSlots(){
        return this.parkingSlots.map( i => {
            if(i.carId){
                return i.carId;
            }
            return null;
        })
    }
    
    remove(carId){
        let freed = false;
        for (let i = 0; i < this.parkingSlots.length ; i++){
            if(this.parkingSlots[i].occupied && this.parkingSlots[i].carId === carId){
                this.parkingSlots[i].occupied = false;
                this.parkingSlots[i].carId = null;
                freed = true;
            }
        }
        return freed;
    }
    
}
