// Praznici u Republici Srbiji
//
// Prema Zakonu o državnim i drugim praznicima („Službeni glasnik RS”, br. 43/01, 101/07 i 92/11)
//
// Državni praznici u Republici Srbiji koji se praznuju neradno su:
// Nova godina - 1. i 2. januar
// Sretenje - Dan državnosti Srbije -15. i 16. februar
// Praznik rada -1. i 2. maj
// Dan primirja u Prvom svetskom ratu -11. novembar
//
// Verski praznici u Republici Srbiji koji se obeležavaju neradno su:
// Prvi dan Božića - 7. januar
// Vaskršnji praznici - počev od Velikog petka zaključno sa drugim danom Vaskrsa
//
// Zakonom je propisano da ako jedan od datuma kada se praznuju navedeni
// državni praznici padne u nedelju, ne radi se prvog narednog radnog dana.

import moment from 'moment';
import calculateOrthodoxEasterForYear from './uskrs';

// Does the date fall on the exact date of national holiday
const doesNationalHolidayFallOnDate = inputDate => {
    const mdate = moment(inputDate);
    const date = mdate.format('YYYY-MM-DD');
    switch (date.substr(5)) {
        // Nova godina - 1. i 2. januar
        case "01-01":
        case "01-02":
        // Prvi dan Božića - 7. januar
        case "01-07":
        // Sretenje - Dan državnosti Srbije - 15. i 16. februar
        case "02-15":
        case "02-16":
        // Praznik rada - 1. i 2. maj
        case "05-01":
        case "05-02":
        // Dan primirja u Prvom svetskom ratu - 11. novembar
        case "11-11":
            return true;
    }

    const easter = calculateOrthodoxEasterForYear(mdate.year());
    const theGoodFriday = moment(easter).add(-2, "days").format('YYYY-MM-DD');
    const theHolySaturday = moment(easter).add(-1, "days").format('YYYY-MM-DD');
    if (date == easter || date == theGoodFriday || date == theHolySaturday) {
        return true;
    }
    return false;
};

export const isNationalHoliday = date => {
    // Zakonom je propisano da ako jedan od datuma kada se praznuju
    // navedeni državni praznici padne u nedelju, ne radi se prvog
    // narednog radnog dana.
    const sunday = moment(date).startOf("week").format('YYYY-MM-DD');;
    if (doesNationalHolidayFallOnDate(sunday)) {
        let prviRadniDan = sunday;
        let loopCount = 0; // failsafe against infinite loop
        while (loopCount++ < 7 && doesNationalHolidayFallOnDate(prviRadniDan)) {
            prviRadniDan = moment(prviRadniDan).add(1, "days");
        }
        // Ako uskrs i prvi maj padaju na isti dan, onda je i ponedeljak i utorak neradan
        const easter = calculateOrthodoxEasterForYear(moment(date).year());
        const uskrsPadaNaPrviMaj = easter.substr(5) === '05-01';
        if (uskrsPadaNaPrviMaj && easter === sunday) {
            //prviRadniDan = dateAdd(prviRadniDan, 1, "days");
        }
        const days = moment(date).diff(prviRadniDan, "days");
        if (days <= 0) {
            return true;
        }
    }

    return doesNationalHolidayFallOnDate(date);
};

export default isNationalHoliday;
