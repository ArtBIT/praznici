// https://sr.wikipedia.org/sr-el/%D0%A0%D0%B0%D1%87%D1%83%D0%BD%D0%B0%D1%9A%D0%B5_%D0%B4%D0%B0%D1%82%D1%83%D0%BC%D0%B0_%D0%A3%D1%81%D0%BA%D1%80%D1%81%D0%B0
// Prema kanonskom pravilu, Uskrs se slavi prve nedelje nakon
// četrnaestog dana lunarnog meseca (što odgovara punom mesecu)
// koji pada na 21. mart ili posle njega (nominalno na dan prolećne
// ravnodnevnice). Da bi odredile tačan datum praznika, hrišćanske crkve
// su izabrale metod definisanja izračunatog „crkvenog“ punog meseca,
// umesto da odrede datum posmatranjem meseca, kao što su u to vreme
// činili Jevreji.
//
// Datumi pravoslavnog uskrsa obično padaju između 4. aprila i 5. maja.
export const uskrsZaGodinu = year => {
    let day = (15 + (year % 19) * 19) % 30;
    day += 10 - ((day + year + year / 4) % 7);
    let month = 4;
    if (day > 30) {
        month = 5;
        day -= 30;
    }
    day = String(Math.ceil(day)).padStart(2, "0");
    month = String(month).padStart(2, "0");
    return `${year}-${month}-${day}`;
};

export default uskrsZaGodinu;
