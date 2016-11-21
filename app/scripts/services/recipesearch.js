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
    return $resource('https://api.edamam.com/search?q=:query&app_id=b6292421&app_key=1ed9c7d45bb47dfcf6fda4645b370387', {}, {
      search:{
        method: 'GET',
        params:{
          query: 'lasagna'
        },
        isArray: false
      }
    });
  });
