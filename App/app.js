angular.module("clone", ['ui.router']).config(function($urlRouterProvider, $stateProvider) {

        $urlRouterProvider.when('', '/');

        $stateProvider
            .state("home", {
                templateUrl: "home/home.html",
                controller:"",
                url: '/'
            })
            .state("news", {
                templateUrl: "news/news.html",
                controller:"",
                url: "/news"
            })
            .state("videos", {
                templateUrl: "videos/videos.html",
                controller:"",
                url: '/videos'
            })
            .state("tours", {
                templateUrl: "tour/tour.html",
                controller:"",
                url: '/tours'
            })
            .state("catalog", {
                templateUrl: "catalog/catalog.html",
                controller:"",
                url: '/catalog'
            })
            .state("store", {
                templateUrl: "store/store.html",
                controller:"storeCtrl",
                url: '/store'
            })
            .state("archives", {
                templateUrl: "archives/archives.html",
                controller:"",
                url: '/archives'
            })
});