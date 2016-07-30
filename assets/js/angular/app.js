(function() {
    angular.module("barbschwarz", ["vcRecaptcha", "duScroll"])
        .config(function($locationProvider) {
            // use the HTML5 History API
            // $locationProvider.html5Mode(true);
        })
    ; // angular.module
})();
