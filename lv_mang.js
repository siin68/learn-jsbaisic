// forreach : duyệt qua các phần tử
// every : check qua các phần tử xem điều kiện mình đưa ra có không, hàm boolen
// find: tìm kiếm xem có ở trong mảng hay kko, chi trả về có 1 phần tử tìm dc đầu tiên
// filter: giống hàm find nhhưng nó trả về tất cả các phần tử có điều kiện giống nhau
// map : hiển thị lại mảng cũ hoặc thay thế nó thành một mảng mới--- bắt được phải có funtion
//

let list_customers = [
  { id: 1, typecustomer: "rich", card: "vip" },
  { id: 2, typecustomer: "nomarl", card: "nomarl card" },
  { id: 3, typecustomer: "poor", card: "nocard" },
];

var checkreich = list_customers.every(function (customer, index) {
  return customer.card === "vip";
});
console.log(checkreich);

function change(infor) {
  return {
    id: infor.id,
    type: `mucdo : ${infor.typecustomer}`,
    card: `loai the: ${infor.card}`,
  };
}
var checkmap = list_customers.map(change);
console.log(checkmap);
