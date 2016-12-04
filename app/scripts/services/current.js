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
    return $resource('http://api.yummly.com/v1/api/recipes?_app_id=769b1e4a&_app_key=119ec6e13180688ec823fa696228edea&q=:query', {}, {
      query:{
        method: 'GET',
        params:{
          recipe: 'lasagna'
        },
        isArray: false
      }
    });
  });
