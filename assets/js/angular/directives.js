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

        .directive("pinterestSquare", [function () {
            return {
                restrict: 'A',
                templateUrl: "assets/js/angular/directives-template/pinterest-square.html"
            }; // return
        }]) // siteFooter
    ; // angular.module
})();
