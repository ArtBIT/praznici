# praznici

> Biblioteka koja proverava da li je zadati datum državni praznik Rebublike Srbije ili ne

![NPM Version](https://img.shields.io/npm/v/praznici.svg)
![Travis CI](https://img.shields.io/travis/artbit/praznici/master)
![GitHub issues badge](https://img.shields.io/github/issues/ArtBIT/praznici)
![GitHub forks badge](https://img.shields.io/github/forks/ArtBIT/praznici)
![GitHub stars badge](https://img.shields.io/github/stars/ArtBIT/praznici)
![GitHub license badge](https://img.shields.io/github/license/ArtBIT/praznici)
![Twitter badge](https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2FArtBIT%2Fpraznici)


## Praznici u Republici Srbiji

Prema Zakonu o državnim i drugim praznicima („Službeni glasnik RS”, br. 43/01, 101/07 i 92/11)

Državni praznici u Republici Srbiji koji se praznuju neradno su:

 - Nova godina - 1. i 2. januar
 - Sretenje - Dan državnosti Srbije -15. i 16. februar
 - Praznik rada -1. i 2. maj
 - Dan primirja u Prvom svetskom ratu -11. novembar

Verski praznici u Republici Srbiji koji se obeležavaju neradno su:

 - Prvi dan Božića - 7. januar
 - Vaskršnji praznici - počev od Velikog petka zaključno sa drugim danom Vaskrsa

Zakonom je propisano da ako jedan od datuma kada se praznuju navedeni
državni praznici padne u nedelju, ne radi se prvog narednog radnog dana.

---

## Install

```bash
npm i -S praznici
```

```bash
yarn global add praznici
```

## Usage

```js
const { daLiJeNacionalniPraznik } = require('praznici');
// ...or if you're using ES6 modules
// import { daLiJeNacionalniPraznik } from 'praznici'; 

daLiJeNacionalniPraznik('2021-11-11'); // true
daLiJeNacionalniPraznik(new Date(2021,10,11)); // true
```

Računanje datuma Uskrsa za odredjenu godinu:
```js
const { uskrsZaGodinu } = require('praznici/lib/uskrs');
// ...or if you're using ES6 modules
// import { uskrsZaGodinu } from 'praznici/src/uskrs'; 

[2010,2015,2019,2020,2021].map(year => console.log(uskrsZaGodinu(year)));

// 2010-04-04
// 2015-04-12
// 2019-04-28
// 2020-04-19
// 2021-05-02
// Ukoliko želite proverite na https://sr.wikipedia.org/wiki/%D0%A3%D1%81%D0%BA%D1%80%D1%81
```


## License

[MIT](http://vjpr.mit-license.org)
