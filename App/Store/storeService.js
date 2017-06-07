console.log("Load store")
angular.module('clone').service('storeService', function($http) {
    console.log("Init Store")
    this.getShirts = function() {
        console.log("Get shirts")
        return $http.get("/api/shirts")
            .then(function(response){
                return response.data;
            });
    };

    this.getId = function() {
        return $http.get('/api/shirts/:id')
            .then(function(){
                return response.data;
            })
    }
});