'use strict';

/**
 * @ngdoc function
 * @name recipeFinderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the recipeFinderApp
 */
angular.module('recipeFinderApp')
  .controller('MainCtrl', function ($scope, recipesearch) {
    $scope.recipesFound = recipesearch.search();

    $scope.findRecipes = function(){
    $scope.recipesFound = recipesearch.search({
        query: $scope.recipe
    });
    $scope.searchQuery = $scope.recipe;
  };
  });
