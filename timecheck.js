var time = {
    hnow: new Date().getHours(),
    nightStart: 20,
    nightEnd: 6,
    get isDay() {
        return (this.hnow >= 12 && this.hnow <= this.nightStart || this.hnow <= 12 && this.hnow >= this.nightEnd);
    },
    get isNight() {
        return (this.hnow >= 12 && this.hnow >= this.nightStart || this.hnow <= 12 && this.hnow <= this.nightEnd);
    }
}
