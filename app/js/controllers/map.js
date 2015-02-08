(function() {

	'use strict';

	angular.module('divePlanner')
		.controller('map', function ($scope, uiGmapGoogleMapApi) {
			$scope.map = {
				center: {
					latitude: 51.568137,
					longitude: 3.954604
				},
				zoom: 11
			};
		});

})();