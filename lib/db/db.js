<<<<<<< HEAD
// 引入mongoose
var mongoose = require("mongoose");
// 连接数据库
mongoose.connect("mongodb://localhost/jiyu", function (error) {
  if (error) {
    console.log("数据库连接失败");
  } else {
    console.log("数据库连接成功");
  }
})
// 导出mongoose
=======
// 引入mongoose
var mongoose = require("mongoose");
// 连接数据库
mongoose.connect("mongodb://localhost/jiyu", function (error) {
  if (error) {
    console.log("数据库连接失败");
  } else {
    console.log("数据库连接成功");
  }
})
// 导出mongoose
>>>>>>> 786a1cf98878a705a42a3bedb0dedb24c91e89f8
module.exports = mongoose;