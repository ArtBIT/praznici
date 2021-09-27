const { isNationalHoliday } = require("./praznici");

const testCases = [
    // drzavni praznici 2011
    ["2011-01-01", true],
    ["2011-01-02", true],
    ["2011-01-07", true],
    ["2011-02-15", true],
    ["2011-02-16", true],
    ["2011-05-01", true],
    ["2011-05-02", true],
    ["2011-11-11", true],
    // drzavni praznici 2021
    ["2021-01-01", true],
    ["2021-01-02", true],
    ["2021-01-03", false],
    ["2021-01-07", true],
    ["2021-01-08", false],
    ["2021-02-15", true],
    ["2021-02-16", true],
    ["2021-02-17", false],
    ["2021-05-01", true],
    ["2021-05-02", true],
    ["2021-11-11", true],
    // Uskrsnji
    ["2021-04-30", true],
    ["2021-05-01", true],
    ["2021-05-02", true],
    ["2021-05-03", true],
    ["2021-05-04", false],
    ["2020-04-17", true],
    ["2020-04-18", true],
    ["2020-04-19", true],
    ["2020-04-20", true],
    ["2020-04-21", false],
    // 2016-e uskrs i prvi maj padaju na isti dan
    ["2016-01-07", true],
    ["2016-01-08", false],
    ["2016-04-29", true],
    ["2016-04-30", true],
    ["2016-05-01", true],
    ["2016-05-02", true],
    ["2016-05-03", true],
    ["2016-05-04", false],
    // Ne-praznici
    ["2020-04-24", false],
    ["2021-11-14", false],
    ["2021-12-13", false],
    [new Date(2021,11,13), false],
    [new Date(2021,0,1), true],
];
describe("isNationalHoliday", () => {
    it.each(testCases)("Check %s", (datum, expected) => {
        expect(isNationalHoliday(datum)).toBe(expected);
    });
});
