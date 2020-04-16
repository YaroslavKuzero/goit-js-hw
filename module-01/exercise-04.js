const credits = 23580;
const pricePerDroid = 3000;
const wantBuy = prompt('How many droiders you want to buy');
let totalPrice;

if (wantBuy === null) {
  console.log('declined by user');
} else {
  totalPrice = wantBuy * pricePerDroid;
  if (totalPrice > credits) {
    console.log('Not enough credits on your account');
  } else {
    console.log(
      `Congratulations you have bought ${wantBuy} droiders. Balance on your account is ${credits -
      totalPrice}`,
    );
  }
}
