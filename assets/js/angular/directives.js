(function() {
    angular.module("barbschwarz")
        .directive("siteHeader", [function() {
            return {
                restrict: 'A',
                templateUrl: "assets/js/angular/directives-template/header.html"
            }; // return
        }]) // siteHeader

        .directive("siteFooter", [function () {
            return {
                restrict: 'A',
                templateUrl: "assets/js/angular/directives-template/footer.html"
            }; // return
        }]) // siteFooter

        .directive("barbsSayings", [function () {
            return {
                restrict: 'A',
                templateUrl: "assets/js/angular/directives-template/barbs-sayings.html"
            }; // return
        }]) // siteFooter
    ; // angular.module
})();
