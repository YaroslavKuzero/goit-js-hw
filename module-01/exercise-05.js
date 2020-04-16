const userCountry = prompt(
  'What country need parcel to be delivered?',
);
const CHINA = 100;
const CHILI = 250;
const AUSTRALIA = 170;
const INDIA = 80;
const JAMAICA = 120;

if (userCountry === null) {
  console.log('Declined by user');
} else {
  switch (userCountry.toUpperCase()) {
    case 'CHINA':
      console.log(
        ` Delivery to ${userCountry} can be arranged for ${CHINA} credits`,
      );
      break;

    case 'CHILI':
      console.log(
        ` Delivery to ${userCountry} can be arranged for ${CHILI} credits`,
      );
      break;

    case 'AUSTRALIA':
      console.log(
        ` Delivery to ${userCountry} can be arranged for ${AUSTRALIA} credits`,
      );
      break;

    case 'INDIA':
      console.log(
        ` Delivery to ${userCountry} can be arranged for ${INDIA} credits`,
      );
      break;

    case 'JAMAICA':
      console.log(
        ` Delivery to ${userCountry} can be arranged for ${JAMAICA} credits`,
      );
      break;

    default:
      alert(
        `Sorry, delivery to ${userCountry} is not carried out`,
      );
      break;
  }
}
