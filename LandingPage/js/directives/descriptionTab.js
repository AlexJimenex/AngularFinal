(function() {
    

    let app= angular.module('descstab', []);
    app.directive('descTab',function(){
        return{
            restrict:'E',
            templateUrl:'partials/desc-tab.html',
            controller:function(){
                console.log("desc tab")
            }
        }
    })
 })();