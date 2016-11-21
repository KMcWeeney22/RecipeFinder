'use strict';

/**
 * @ngdoc service
 * @name recipeFinderApp.current
 * @description
 * # current
 * Factory in the recipeFinderApp.
 */
angular.module('recipeFinderApp')
  .factory('current', function ($resource) {
    // Service logic
    // ...

    // Public Api here
    return $resource('https://api.edamam.com/search?q=:recipe&app_id=b6292421&app_key=1ed9c7d45bb47dfcf6fda4645b370387', {}, {
      query:{
        method: 'GET',
        params:{
          recipe: 'lasagna'
        },
        isArray: false
      }
    });    
  });
