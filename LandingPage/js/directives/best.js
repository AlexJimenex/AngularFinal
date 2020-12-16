(function() {
    

    let app= angular.module('best', []);
    app.directive('best',function(){
        return{
            restrict:'E',
            templateUrl:'partials/best.html',
            controller:function(){
                console.log("best")
            }
        }
    })
 })();