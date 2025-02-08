let mangs = [
  [1, 2],
  [3, 4],
  [5, 6],
];

for (i = 0; i < mangs.length; i++) {
  // console.log(mangs[i]);
  for (j = 0; j < mangs[i].length; j++) {
    console.log(mangs[i][j]);
  }
}
let mangkytu = ["huyanh", "hai", "giang", "thin"];
// sap xep cac pha ntu trong mang
let sapxep = mangkytu.reverse().sort(function (a, b) {
  return a.length - b.length;
});
console.log(sapxep);
