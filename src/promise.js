import data from "./data.json";

let promise = new Promise(function (resolve, reject) {
  resolve(data);
  reject("err");
});

export default promise;
