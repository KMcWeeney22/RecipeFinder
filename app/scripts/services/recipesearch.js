'use strict';

/**
 * @ngdoc service
 * @name recipeFinderApp.recipesearch
 * @description
 * # recipesearch
 * Factory in the recipeFinderApp.
 */
angular.module('recipeFinderApp')
  .factory('recipesearch', function ($resource) {
    // Service logic
    // ...

    // Public Api here
    return $resource('http://api.yummly.com/v1/api/recipes?_app_id=769b1e4a&_app_key=119ec6e13180688ec823fa696228edea&q=:query&requirePictures=true', {}, {
      recipes:{
        method: 'GET',
        params:{
          query: 'carbonara'
        },
        isArray: false
      }
    });
  });
