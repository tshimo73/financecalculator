
export class SimpleInterest {
    constructor(principle, rate, years) {
        this.principle = principle;
        this.rate = rate;
        this.years = years;
    }

    // Method to calculate total amount (principal + interest)
    calculate() {
        return (this.principle * (1 + (this.rate / 100) * this.years)).toFixed(2);
    }

    // Method to calculate interest only
    interest() {
        return (this.calculate() - this.principle).toFixed(2);
    }

    // Method to calculate depreciation
    depreciate() {
        return (this.principle * (1 - (this.rate / 100) * this.years)).toFixed(2);
    }
}
