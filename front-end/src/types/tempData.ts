import { Yeartype } from ".";

const tempData: Yeartype[] = [];

function genAvg(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
}
for (let index = 0; index < 10; index++) {
    tempData.push({
        id: index,
        year: 2010 + index,
        highest: genAvg(50, 100),
        avg: genAvg(12, 18),
        median: genAvg(10, 12),
        domesticOffers: genAvg(100, 150),
        internationalOffers: genAvg(10, 20)
    });
}
export default tempData;
