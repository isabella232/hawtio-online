namespace Online {

  export const labelsModule = angular
    .module('hawtio-online-labels', [])
    .directive('labels', labelsDirective)
    .filter('hashSize', hashSizeFilter)
    .name;

  function labelsDirective($location: ng.ILocationService, $timeout: ng.ITimeoutService) {
    'ngInject';
    return new LabelsDirective($location, $timeout);
  }

  function hashSizeFilter() {
    return (hash: any) => !hash ? 0 : Object.keys(hash).length;
  }
}
