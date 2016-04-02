/* global angular */
var shoppingList = angular.module('root', [])

shoppingList.controller('index', ['$scope', function ($scope) {
  $scope.cusName = ''
  $scope.cusSur = ''
  $scope.cusTel = ''
  $scope.cusRoom = 0

  $scope.selection = []

  $scope.list = []

  $scope.remove = function (item) {
    var index = $scope.list.indexOf(item)
    $scope.list.splice(index, 1)
  }

  $scope.clearAll = function (list) {
    var length = list.length
    list.splice(0, length)
  }

  $scope.addItem = function () {
    $scope.list.push({name: $scope.cusName, surname: $scope.cusSur, tel: $scope.cusTel, room: $scope.cusRoom })
    console.log($scope.list)
    $scope.cusName = ''
    $scope.cusSur = ''
    $scope.cusTel = ''
    $scope.cusRoom = ''
  }

  $scope.add = function (item) {
    var item2 = $scope.list.indexOf(item)
    $scope.inventory.push($scope.list[item2])
    $scope.list[item2].checked = true
  }
}])
