function User(firstname, lastname, age) {
  this.firstname = firstname;
  this.lastname = lastname; 
  this.age = age;
  this.getfullname = function () {
    return `${this.firstname} ${this.lastname}`;
  };
}

// Thêm thuộc tính vào prototype
User.prototype.classname = "lop11"; 

// Thêm phương thức vào prototype
User.prototype.ngaysinh = function () {
  return 2025 - this.age;
};

const tacgia = new User("camtho", "Vothi", 20);
const hocvien = new User("thin", "tranhoang", 25);

console.log(hocvien.classname);   // ✅ Output: "lop11"
console.log(tacgia.ngaysinh());   // ✅ Output: 2005 (2025 - 20)
