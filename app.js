(function () {
	'use strict';

	angular.module('LunchCheck',[]).controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject =['$scope'];

	function LunchCheckController ($scope){
		$scope.item = '';
		$scope.msg = '';
		$scope.font = {};
		$scope.box = {};

		$scope.checkItems = function () {
			console.log ('check Items');
			console.log ($scope.item);
			if($scope.item !== '') {
				var arr = $scope.item.split(',');
				var count =0;
				for(var i =0; i<arr.length; i++){
					if(arr[i].trim() !=='')
						count++;
				}
				if(count > 0){
					if(count <=3)
          {
						$scope.msg = 'Enjoy!';
					}
					else if(count > 3){
						$scope.msg = 'Too much!'
					}
					$scope.font = {
						"color":"green"
					};
					$scope.box = {
						"border-color":"green"
					};
				}
				else {
					enterItems();
				}
			}
			else {
				enterItems();
			}
		}
		var enterItems = function() {
			$scope.msg = 'Please enter data first';
				$scope.font = {
					"color":"red"
				};
				$scope.box = {
					"border-color":"red"
				};
		};
	}
})();
