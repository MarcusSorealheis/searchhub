/*
Some utility methods for generating unique ids
 */
(function(){
  'use strict';

  angular.module('searchHub.services.id', ['lucidworksView.services.apiBase',
      'lucidworksView.services.config'
    ]).factory('IDService', IDService);

  function IDService($log){
    'ngInject';

    var service = {
      generateUUID: generateUUID
    };
    return service;

    function generateUUID() {
      var d = new Date().getTime();
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
      return uuid;
    };
  }

})();