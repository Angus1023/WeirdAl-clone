console.log("Load ctrl")
angular.module('clone').controller('storeCtrl', function($scope, storeService) {
    console.log("Init ctrl")
    storeService.getShirts().then(function(response){
        $scope.shirts = response;
    });
});