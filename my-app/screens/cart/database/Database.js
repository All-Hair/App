export const COLOURS = {
  white: '#ffffff',
  black: '#000000',
  green: '#00AC76',
  red: '#C04345',
  blue: '#0043F9',
  backgroundLight: '#F0F0F3',
  backgroundMedium: '#B9B9B9',
  backgroundDark: '#777777',
};

export const Items = [
  {
    id: 1,
    category: 'product',
    productName: 'pack caviar sublime',
    productPrice: 199,
    description:
      'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressure less ear muffs | Bluetooth 5.0 | Voice control',
    isOff: true,
    offPercentage: 10,
    productImage: require('../database/images/products/caviar3.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/products/caviar3.png'),
      require('../database/images/products/caviar.png'),
      require('../database/images/products/caviarserum3.png'),
    ],
  },
  {
    id: 2,
    category: 'product',
    productName: 'pack hair dressing',
    productPrice: 99,
    description:
      'This shade is suitable for medium brown to black brown hair. Syoss Oleo Intense Permanent Oil Color Bright Red 5-92. ',
    isOff: false,
    productImage: require('../database/images/products/b1.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/products/b1.png'),
      require('../database/images/products/b2.png'),
      require('../database/images/products/b3.png'),
    ],
  },
  {
    id: 3,
    category: 'accessory',
    productName: 'accesoires hair ',
    productPrice: 199,
    description:
      'This shade is suitable for medium brown to black brown hair. Syoss Oleo Intense Permanent Oil Color Bright Red 5-92.',
    isOff: true,
    offPercentage: 18,
    productImage: require('../database/images/accessories/s1.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/accessories/s1.png'),
      require('../database/images/accessories/S2.png'),
      require('../database/images/accessories/S3.png'),
    ],
  },
  {
    id: 4,
    category: 'accessory',
    productName: 'hair all hair walid',
    productPrice: 399,
    description:
      'Fly into your workouts with precise tones that inspire and energize your system with its HD sound, all the time.',
    isOff: false,
    productImage: require('../database/images/accessories/a1.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/accessories/a1.png'),
      require('../database/images/accessories/a2.png'),
      require('../database/images/accessories/a3.png'),
    ],
  },
  {
    id: 5,
    category: 'accessory',
    productName: 'hair product',
    productPrice: 149,
    description:
      'The unbeatable boAt signature sound shines through no matter what are you playing courtesy its 10mm drivers.',
    isOff: false,
    productImage: require('../database/images/accessories/a1.png'),
    isAvailable: false,
    productImageList: [
      require('../database/images/accessories/a1.png'),
      require('../database/images/accessories/a2.png'),
      require('../database/images/accessories/a3.png'),
    ],
  },
  {
    id: 6,
    category: 'accessory',
    productName: 'hair dressing',
    productPrice: 129,
    description:
      'The unbeatable boAt signature sound shines through no matter what are you playing courtesy its 10mm drivers.',
    isOff: false,
    productImage: require('../database/images/accessories/s1.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/accessories/s1.png'),
      require('../database/images/accessories/S2.png'),
      require('../database/images/accessories/S3.png'),
    ],
  },
];
