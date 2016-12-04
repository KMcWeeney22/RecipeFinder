'use strict';

/**
 * @ngdoc function
 * @name recipeFinderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the recipeFinderApp
 */
angular.module('recipeFinderApp')
  .controller('MainCtrl', function ($scope, recipesearch, $localStorage) {
    $scope.recipesFound = recipesearch.recipes();

    $scope.findRecipes = function(){
    $scope.recipesFound = recipesearch.recipes({
        query: $scope.recipe
    });
    $scope.searchQuery = $scope.recipe;
  };

  });
