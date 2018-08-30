f.filter("unique",function () {
    return function (data) {
   //如果data是数组才继续进行过滤,否则不过滤直接返回空数组
   if(angular.isArray(data)){
       var obj = {};
       for(var i= 0; i< data.length;i++){
         obj[data[i].category] = true;
       }
       /*
       * object.keys(对象) 获取对象的所有key
       * object.values(对象) 获取对象的所有value
       * */
       return Object.keys(obj);
   }else {
    return [];
   }
    }
});