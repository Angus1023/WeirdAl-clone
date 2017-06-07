angular.module("clone", ['ui.router']).config(function($urlRouterProvider, $stateProvider) {

        $urlRouterProvider.when('', '/');

        $stateProvider
            .state("home", {
                templateUrl: "home/home.html",
                url: '/'
            })
            .state("news", {
                templateUrl: "news/news.html",
                url: "/news"
            })
            .state("videos", {
                templateUrl: "videos/videos.html",
                url: '/videos'
            })
            .state("tours", {
                templateUrl: "tour/tour.html",
                url: '/tours'
            })
            .state("catalog", {
                templateUrl: "catalog/catalog.html",
                url: '/catalog'
            })
            .state("store", {
                templateUrl: "store/store.html",
                controller:"storeCtrl",
                url: '/store'
            })
            .state("store.account", {
                templateUrl: "store/account.html",
                controller:"accountCtrl",
                url: '/account'
            })    
            .state("archives", {
                templateUrl: "archives/archives.html",
                url: '/archives'
            })
});