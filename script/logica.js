angular.module("moduloEsempio", ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/view1', {
            templateUrl: 'page1.html'
        })
        .when('/view2', {
            templateUrl: 'page2.html',
            controller: 'Ctrl'
        })
        .otherwise({redirectTo: '/view1'});
}])
.factory('Pizza', function($http) {
    var pizzaService = {
        getData: function () {
            return $http.get('./pizza.json').then(function (response) {
                return response.data;
            });
        }
    };
    return pizzaService;
})
.controller('Ctrl', ['$scope', 'Pizza',
    function($scope, Pizza) {
        $scope.dati = {};
        $scope.dati.num1 = 0;
        $scope.dati.num2 = 0;
        Pizza.getData().then(function(data) {
            $scope.dati.pizza = data.name;
        });
    }
]);
