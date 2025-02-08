let success = false;
let i = 0;

do {
  i++;
  console.log("Nạp thành công lần " + i);

  // Giả lập xác suất thành công 50%
  if (Math.random() > 0.5) { 
    success = true;
    console.log("Nạp tiền thành công! ✅");
  } else {
    console.log("Nạp thất bại, thử lại... 🔄");
  }
} while (!success && i < 3);
