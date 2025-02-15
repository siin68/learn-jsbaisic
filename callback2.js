function thucthi(name, error) {
  if (name) {
    console.log("my name is: ", name);
  }
  if (error) {
    console.log("loi roi, ma loi", error);
  }
}

function dieukien(a, b, callback) {
  if (a > 5 || b > 5) {
    callback("thin", undefined);
  } else {
    callback(undefined, "404");
  }
}

dieukien(2, 1, thucthi);
