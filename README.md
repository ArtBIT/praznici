# praznici

> Biblioteka koja proverava da li je zadati datum državni praznik Rebublike Srbije ili ne

![Travis CI](https://img.shields.io/travis/artbit/praznici/master)
![NPM Version](https://img.shields.io/npm/v/praznici.svg)
![GitHub issues badge](https://img.shields.io/github/issues/ArtBIT/praznici)
![GitHub forks badge](https://img.shields.io/github/forks/ArtBIT/praznici)
![GitHub stars badge](https://img.shields.io/github/stars/ArtBIT/praznici)
![GitHub license badge](https://img.shields.io/github/license/ArtBIT/praznici)
![Twitter badge](https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2FArtBIT%2Fpraznici)

## Install

```bash
npm i -S praznici
```

```bash
yarn global add praznici
```

## Usage

```js
import { isNationalHoliday } from 'praznici';

isNationalHoliday('2021-11-11'); // true
isNationalHoliday(new Date(2021,10,11)); // true
```

## License

[MIT](http://vjpr.mit-license.org)
