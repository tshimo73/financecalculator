export class CompoundInterest{
    constructor(principle, interest, compoundPeriod, years){
        this.principle = principle
        this.interest = interest
        this.compoundPeriod = compoundPeriod
        this.years = years
    }

    calculate(){
        const total = this.principle * Math.pow((1 + (this.interest / this.compoundPeriod)), this.years * this.compoundPeriod)
        return total
    }
}