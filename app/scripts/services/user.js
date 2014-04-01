'use strict';

angular.module('genAppApp')
    .factory('User', function ($resource) {
        return $resource('/api/users/:id', {
            id: '@id'
        }, { //parameters default
            update: {
                method: 'PUT',
                params: {}
            },
            get: {
                method: 'GET',
                params: {
                    id: 'me'
                }
            }
        });
    });