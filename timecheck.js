var time = {
    hnow: new Date().getHours(),
    nightStart: 20,
    nightEnd: 6,
    get isDay() {
        return (this.now >= 12 && this.hnow <= this.nightStart || this.now <= 12 && this.hnow >= this.nightEnd);
    },
    get isNight() {
        return (this.now >= 12 && this.hnow >= this.nightStart || this.now <= 12 && this.hnow <= this.nightEnd);
    }
}
