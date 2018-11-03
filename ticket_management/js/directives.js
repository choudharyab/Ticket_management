'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).directive('closeMyModal', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            scope.dismiss = function() {
                element.modal('hide');
            };
            scope.product_dismiss = function() {
                element.modal('hide');
            };
        }
    }
}).directive('capitalize', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, modelCtrl) {
            var capitalize = function(inputValue) {
                if (inputValue == undefined) inputValue = '';
                var capitalized = inputValue.toUpperCase();
                if (capitalized !== inputValue) {
                    modelCtrl.$setViewValue(capitalized);
                    modelCtrl.$render();
                }
                return capitalized;
            };
            modelCtrl.$parsers.push(capitalize);
            capitalize(scope[attrs.ngModel]); // capitalize initial value
        }
    };
}).directive('uploadMyFile', function () {

    return {
  
        scope: true,        //create a new scope
  
        link: function (scope, el, attrs) {
  
            el.bind('change', function (event) {
  
                var files = event.target.files;
  
                //iterate files since 'multiple' may be specified on the element
  
                for (var i = 0; i < files.length; i++) {
  
                    //emit event upward
  
                    scope.$emit("selectedFile", { file: files[i] });
  
                }
  
            });
  
        }
  
    };
  
  });
