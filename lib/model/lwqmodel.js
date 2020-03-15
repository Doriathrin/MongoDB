// 引入db.js文件
var mongoose = require("../db/db");
// 引入lwqSchema.js文件
var lwqSchema = require("../schema/lwqschema");
// 创建模型
var lwqmodel = mongoose.model("lwqmodel", lwqSchema, "lwq");
// 导出lwqmodel
module.exports = lwqmodel;