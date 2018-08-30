app.controller("pCtrl", function ($scope, $http) {
    $http.jsonp("http://127.0.0.1:5800/product?callback=JSON_CALLBACK").success(function (data) {
        console.log(data);
        $scope.products = data;
        //声明一个变量存储商品
        $scope.selectPros = data;
        //声明一个变量存储选择的button
        $scope.selectBtn = "全部";



        $scope.getProductByCategory = function (category) {
            console.log(category);
            if(category == '全部'){
                $scope.selectPros = data;
                $scope.selectBtn = "全部";

            }else{
                //点击的是上衣/裤子/中的某一个
                $scope.selectPros = $scope.products.filter(function (v,k) {
                    return v.category == category;
                });
                $scope.selectBtn = category;

            }
            getPageCount();
            $scope.getProsByPage(1);
        }
        $scope.getClassByCategory= function (className) {
            return $scope.selectBtn == className ? "btn-primary":"";
        }
        //获取分页的数数量
        function getPageCount() {
            var count = Math.ceil($scope.selectPros.length/3);
            var arr = [];
            for(var i= 1; i<=count;i++){
                arr.push(i);
            }
            $scope.page = arr;
        }
        getPageCount();
        //声明一个变量存储当亲的分页按钮
        $scope.clickBtn = 1;


        //分页按钮的点击事件
        $scope.getProsByPage = function (page) {
            $scope.pagePros = $scope.selectPros.slice((page-1)*3,page*3);
            $scope.clickBtn = page;
        }
        $scope.getProsByPage(1);
        //给分页按钮赋class函数
        $scope.getClassByPage= function (className) {
            return $scope.clickBtn == className ? "btn-primary":"";
        }

    }).error(function (err) {
        console.log(err);
    });
});