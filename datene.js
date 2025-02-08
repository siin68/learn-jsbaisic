const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

function getthungay() {
  const thungay = date.getDay(); // getDay() trả về số (0-6)
  switch (thungay) {
    case 0:
      return "Chủ Nhật";
    case 1:
      return "Thứ Hai";
    case 2:
      return "Thứ Ba";
    case 3:
      return "Thứ Tư";
    case 4:
      return "Thứ Năm";
    case 5:
      return "Thứ Sáu";
    case 6:
      return "Thứ Bảy";
    default:
      return "Lỗi!";
  }
}

console.log(date.getMonth() + 1); // Lấy tháng phải +1 vì index từ 0

console.log(`Hôm nay là ${getthungay()} ngày ${day} / ${month} / ${year}`);
