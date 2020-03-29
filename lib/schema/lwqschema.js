<<<<<<< HEAD
// 引入db.js文件
var mongoose = require("../db/db");
// 定义schema
var lwqSchema = mongoose.Schema({
  id: Number,//学号
  name: String,//姓名
  age: Number,//年龄
  data: String,//时间
  sex: String,//性别
  class:String //班级
})
// 导出lwqSchema
=======
// 引入db.js文件
var mongoose = require("../db/db");
// 定义schema
var lwqSchema = mongoose.Schema({
  id: Number,//学号
  name: String,//姓名
  age: Number,//年龄
  data: String,//时间
  sex: String,//性别
  class:String //班级
})
// 导出lwqSchema
>>>>>>> 786a1cf98878a705a42a3bedb0dedb24c91e89f8
module.exports = lwqSchema;