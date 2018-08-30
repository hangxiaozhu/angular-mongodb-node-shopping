var  express = require("express")
var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://127.0.0.1:27017/data",{useMongoClient:true});
var app = new express();

mongoose.connection.on("open",function () {
    console.log("数据库已经连接上");
    
    var schema = new mongoose.Schema({ name: { type: String, default: "" }, price: { type: Number, default: "" }, des: { type: String, default: "" }, category: { type: String, default: "" } }, { collection: "product" });

    //根据结构创建创建模型
    //参数1:字符串,与集合名保持一致
    //参数2:结构对象
    var model = db.model("product", schema);
    app.get("/product", function (req, res) {
        model.find({}, function (error, result) {
            res.jsonp(result);
        });

    });
    
    // //1.插入数据
    // model.create({
    //     name: "迪丽热巴",
    //     password:18336545651
    // }, function (error, result) {
    //     console.log(error, result);
    // });
    //model.create({
    //    name: "senma上衣",
    //    price: 300.0,
    //    des: "最新款senma上衣",
    //    category: "上衣",
    //}, function (error, result) {
    //    console.log(error, result);
    //});
    //
    //model.create({
    //    name: "meibang裤子",
    //    price: 200,
    //    des: "最新款meibang裤子",
    //    category: "裤子",
    //}, function (error, result) {
    //    console.log(error, result);
    //});
    //
    //
    //model.create({
    //    name: "fashi",
    //    price: 100,
    //    des: "最潮款fashi，为了德玛西亚",
    //    category: "裤子",
    //}, function (error, result) {
    //    console.log(error, result);
    //});
    //
    //model.create({
    //    name: "naik鞋子",
    //    price: 500.0,
    //    des: "最新款naik鞋子，穿上原地起飞",
    //    category: "鞋子",
    //}, function (error, result) {
    //    console.log(error, result);
    //});
    //
    //model.create({
    //    name: "钢铁侠披风",
    //    price: 2000.0,
    //    des: "超燃带飞全场，免疫一切伤害",
    //    category: "披风",
    //}, function (error, result) {
    //    console.log(error, result);
    //});
    //

      
        

});

app.listen(5800);