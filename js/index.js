var f = angular.module("filters",[]);
var app = angular.module("app", ["ngRoute","filters"]);

//配置路由
app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl:"template/product.html",
        controller:"pCtrl"
    }).when("/shopCar", {
        templateUrl:"template/shopCar.html"
    }).when("/product", {
        templateUrl:"template/product.html",
        controller:"pCtrl"
    }).otherwise({
        redirectTo:"/"
    });
});

app.controller("mainCtrl", function ($scope, $location) {
    $scope.goToShopCar = function () {
        //跳转到购物车界面
        $location.path("/shopCar");
    }

    //声明一个数组存储垢面的商品
    $scope.shopCar = [];
    //加入购物车的方法
    $scope.addCar = function (pro) {
        if($scope.shopCar.length == 0){
            var obj = {
                product:pro,
                count:1
            }
            $scope.shopCar.push(obj);

        }else{
            //判断之前是否已经购买
            for(var i= 0;i<$scope.shopCar.length;i++){
                if(pro._id == $scope.shopCar[i].product._id) {
                   //如果买过,只需要count++
                    $scope.shopCar[i].count++;
                    break;
                }
            }
            if(i == $scope.shopCar.length){
                //没有相同的商品
                var obj = {
                    product:pro,
                    count:1
                }
                $scope.shopCar.push(obj);
            }
        }
    }
    //获取商品总个数的函数
    $scope.getTotalCount = function () {
        var count = 0;
        for(var i= 0;i<$scope.shopCar.length;i++){
            count += $scope.shopCar[i].count;
        }
        return count;
    }
    //获取商品总价的函数
    $scope.getTotalPrice = function () {
        var money = 0;
        for(var i= 0;i<$scope.shopCar.length;i++){
            money += $scope.shopCar[i].count * $scope.shopCar[i].product.price;
        }
        return money;
    }
    //
    $scope.deletePro = function (pro) {
        pro.count --;
        if(pro.count == 0){
            var i = $scope.shopCar.indexOf(pro);
            $scope.shopCar.splice(i,1);
        }
    }
});