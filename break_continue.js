for (i = 0; 1 <= 30; i++) {
  if (i % 2 !== 0) {
    continue; // bỏ qua các số ko chia hết cho 2
  } else if (i >= 16) {
    break; // dừng nếu số đó là 16
  }
  console.log(i);
}
