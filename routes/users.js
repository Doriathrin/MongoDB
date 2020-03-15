// 引入express
var express = require('express');
// 引入router
var router = express.Router();
// 引入lwqmodel.js文件
var lwqmodel = require("../lib/model/lwqmodel");
/* GET users listing. */
// 创建接口
// 写入数据接口
router.get('/lin', function (req, res, next) {
  console.log(req.query);
  //  获取前台发送过来的数据
  var data = req.query;
  // 将数据存储到数据库
  var model = new lwqmodel(data);
  model.save(function (error, data) {
    if (error) {
      res.send({
        code: 1,
        message:"数据存储失败"
      })
    } else {
      res.send({
        code: 0,
        message:"数据存储成功"
      })
    }
  })
});
// 读取数据
router.get("/read", function (req, res, next) {
  lwqmodel.find({}, function (error, data) {
    if (error) {
      res.send({
        code: 2,
        message:"读取失败"
      })
    } else {
      res.send({
        code: 0,
        message: "读取成功",
        data:data
      })
    }
  })
})
// 删除数据
router.get("/shang", function (req, res, next) {
  lwqmodel.remove(req.query, function (error) {
    if (error) {
      res.send({
        code: 3,
        message:"删除数据失败"
      })
    } else {
      res.send({
        code: 0,
        message:"删除数据成功"
      })
    }
  })
})
// 修改数据
router.get("/gai", function (req, res, next) {
  lwqmodel.update(req.query.f, req.query.con, function (error) {
    if (error) {
      res.send({
        code: 4,
        message:"数据修改失败"
      })
    } else {
      res.send({
        code: 0,
        message:"数据修改成功"
      })
    }
  })
})
// 搜索数据的接口
router.get("/find", function (req, res, next) {
  lwqmodel.find(req.query, function (error, data) {
    if (error) {
      res.send({
        code: 5,
        message:"查找失败"
      })
    } else {
      res.send({
        code: 0,
        message: "查找成功",
        data:data
      })
    }
  })
})
// 模糊搜索
router.get("/key", function (req, res, next) {
  var data = req.query;
  lwqmodel.find({name:new RegExp(data.name)}, function (error,data) {
    if (error) {
      res.send({
        code: 6,
        message: "查找失败"
      })
    } else {
      res.send({
        code: 0,
        message: "查找成功",
        data: data
      })
    }
  })
})
module.exports = router;
