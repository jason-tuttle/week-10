const inventory = {
  electrics: [
    {
      img: 'https://media.sweetwater.com/api/i/f-webp__ha-7a56e0dad19dcb8e__q-85__hmac-ab3244d8dc4bf2d9c2b341378f90468ec9c6d224/images/guitars/LPST17HBCH/170037974/170037974-body-large.jpg.auto.webp',
      make: 'Gibson',
      model: 'Les Paul Studio',
      color: 'Honey Burst',
      price: 1499
    },
    {
      img: 'https://media.sweetwater.com/api/i/f-webp__ha-fd56fbf62171ba34__q-85__hmac-ea75a4541e384e17444d3ed1a980acf14ee01efa/images/guitars/StratAERACB/US17015165/US17015165-body-large.jpg.auto.webp',
      make: 'Fender',
      model: 'American Elite Stratocaster',
      color: 'Aged Cherry Burst',
      price: 2049
    },
    {
      img: 'https://media.sweetwater.com/api/i/f-webp__ha-d37c3d0c2e9c892c__q-85__hmac-eb48feda384eb32e4b21d7b76085ed0755d6f0c5/images/guitars/DSFR17VSCH/170089975/170089975-body-large.jpg.auto.webp',
      make: 'Gibson',
      model: 'Firebird',
      color: 'Mahogany',
      price: 2049
    },
    {
      img: 'https://media.sweetwater.com/api/i/f-webp__ha-342589d935df7636__q-85__hmac-b898a0409c7d37a45698407f52529146072baef5/images/guitars/JTV69LPB/W16110029/W16110029-body-large.jpg.auto.webp',
      make: 'Line6',
      model: 'Variax JTV-69',
      color: 'Lake Placid Blue',
      price: 999
    },
  ],
  acoustics: [
    {
      img: 'https://media.sweetwater.com/api/i/f-webp__ha-16ffb747afa290c3__q-85__hmac-9625ad2944cff571d44ec84acb19c1fd2fd53d9c/images/guitars/214ceDlx/2106027483/2106027483-body-large.jpg.auto.webp',
      make: 'Taylor',
      model: '214ce DLX',
      color: 'Layered Rosewood back and sides',
      price: 1199
    },
    {
      img: 'https://media.sweetwater.com/api/i/f-webp__ha-2255b55a9e6ad474__q-85__hmac-c05764ded982ef8ae5f92cc094f7f034eb2d3f3e/images/guitars/00018-14/M2096204/M2096204-body-large.jpg.auto.webp',
      make: 'Martin',
      model: '000-18',
      color: 'Natural',
      price: 2459
    },
    {
      img: 'https://media.sweetwater.com/api/i/f-webp__ha-8c5bbb6f2d15f841__q-85__hmac-6f0936d9cc6ca5841157adc14891c75ca9b6f711/images/guitars/D15M/M2063755/M2063755-body-large.jpg.auto.webp',
      make: 'Martin',
      model: 'D-15M',
      color: 'Natural',
      price: 1399
    },
    {
      img: 'https://media.sweetwater.com/api/i/f-webp__ha-8b031cd94f2af673__q-85__hmac-8badc0f973d0d6305f08ed619d9773d1213a3d0b/images/guitars/LL16R12HB/HNL110619/HNL110619-body-large.jpg.auto.webp',
      make: 'Yamaha',
      model: 'LL16 12-String',
      color: 'Natural',
      price: 899
    },
  ],
  bass: [
    {
      img: 'https://media.sweetwater.com/api/i/f-webp__ha-ba69a35d5b583dd1__q-85__hmac-399b3733935ba628813a4ea4d48ca3b990dc72d8/images/guitars/JBassAPFMACB/US17048763/US17048763-body-large.jpg.auto.webp',
      make: 'Fender',
      model: 'American Professional Jazz',
      color: 'Aged Cherry Burst',
      price: 1999
    },
    {
      img: 'https://media.sweetwater.com/api/i/f-webp__ha-ea269f164540d497__b-original__w-300__h-450__bg-ffffff__q-85__hmac-4859a21277737dc5c7e169b71433ca95e88bc78a/images/items/750/HCT5001CV-large.jpg.auto.webp',
      make: 'Hofner',
      model: 'HCT-500/1',
      color: 'Antique Brown Sunburst',
      price: 699
    },
    {
      img: 'https://media.sweetwater.com/api/i/f-webp__ha-2a90426a723103d0__q-85__hmac-5ee7fe8df549c95f5f75b51ff2a089e9cc5fa18b/images/guitars/PBassAEMBK/US16126401/US16126401-body-large.jpg.auto.webp',
      make: 'Fender',
      model: 'American Elite Precision',
      color: 'Black',
      price: 1899
    },
    {
      img: 'https://media.sweetwater.com/api/i/f-webp__ha-18fa07f4b7c6fce0__q-85__hmac-017033e22b2572fac88b1dc5ee76593d032402a1/images/guitars/OldSmoothBTS/E97867/E97867-body-large.jpg.auto.webp',
      make: 'Ernie Ball',
      model: 'StingRay 40th Anniversary',
      color: 'Butterscotch',
      price: 1999
    },
  ],
  other: [
    {
      img: 'https://media.sweetwater.com/api/i/f-webp__ha-f96ce9630136f905__b-original__w-300__h-450__bg-ffffff__q-85__hmac-b75e99d1baa3cfb3192bf6b6f14d7f7db9c54c5a/images/items/750/15CME-large.jpg.auto.webp',
      make: 'Cordoba',
      model: '15CM-E Ukulele',
      color: 'Sunburst',
      price: 129
    },
    {
      img: 'https://media.sweetwater.com/api/i/f-webp__ha-0dc6825d31cd709d__b-original__w-300__h-450__bg-ffffff__q-85__hmac-cf550545cba4d8cddb2d9b76c475277e8a40e73f/images/items/750/G9350ParkAve-large.jpg.auto.webp',
      make: 'Gretch',
      model: 'G9350 Mandolin',
      color: 'Vintage Sunburst',
      price: 579
    },
    {
      img: 'https://media.sweetwater.com/api/i/f-webp__ha-ea2d25fd30dd7575__b-original__w-300__h-450__bg-ffffff__q-85__hmac-9564d886a3688c38278802bf246a3467980b88ab/images/items/750/EF5EVNNH-large.jpg.auto.webp',
      make: 'Epiphone',
      model: 'MM-50E Mandolin',
      color: 'Vintage Natural',
      price: 659
    },
    {
      img: 'https://media.sweetwater.com/api/i/f-webp__ha-a15b5e9c0782c40f__b-original__w-300__h-450__bg-ffffff__q-85__hmac-1ea51fe66b71b4ef664270ff2bbb1edf8efc572d/images/items/750/G9455Dixie-large.jpg.auto.webp',
      make: 'Gretsch',
      model: 'G9455 Banjo',
      color: 'Amber Maple Matte',
      price: 499
    },
  ],
}

export default inventory;
