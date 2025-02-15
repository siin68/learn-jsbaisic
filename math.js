// .round():  làm tròn 1 số ra số nguyên
// .abs(): giá trị tuyệt đối của một số
// .ceil(): chỉ làm tròn trên
// .floor(): chỉ làm tròn dưới
// random(): một dãy số thập phân nhỏ hơn 1
//

// tạo vòng quay may mắn
const vongquay = Math.floor(Math.random() * 100);
console.log(vongquay);
let giamgia = ["50%", "12%", "25%", "6%", "22%"];

// console.log(giamgia[vongquay]);
function dapdacuonghoa() {
  if (vongquay < 5) {
    console.log("dap da thanh cong");
  } else if (vongquay < 20) {
    console.log("ban can them da");
  } else {
    console.log("dap da that bai");
  }
}
dapdacuonghoa();
