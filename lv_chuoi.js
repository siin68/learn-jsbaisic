let myname = "tranhoangthin";
// tim kiem chuoi
console.log("1" + myname.indexOf("r", 3)); // tìm nơi có chữ này, nếu trùng chứ  thì nó lấy thứ tự đầu(số 3 là nơi bắt đầu tìm tự thêm vào )
console.log("2" + myname.lastIndexOf("t")); // tìm nơi có chữ này, nếu trùng chứ  thì nó lấy thứ tự cuối
console.log("3" + myname.search("t")); // cũng tìm kiếm nhưng nó có số vào như cái số 1 cũng ko dc

// cat chuoi
console.log("4" + myname.slice(4, 6)); //  cắt từ 4-6, còn cắt ngược sẽ dùng số âm, số cuối cùng là số 0
// thay the chuoi
console.log("5" + myname.replace("thin", "tho")); // ghi chữ cần thay và chữ thay
console.log("6" + myname.replace(/t/g, "tho")); // thay tat ca chu t thanh chữ tho
// chuyển chuỗi thành array
let arrays = "thin, yeu , tho";
console.log(arrays.split(","));
