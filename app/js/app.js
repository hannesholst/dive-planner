(function() {

	'use strict';

	var app = angular.module('divePlanner', ['uiGmapgoogle-maps', 'lumx'])
		.config(function(uiGmapGoogleMapApiProvider) {
			uiGmapGoogleMapApiProvider.configure({
				key: 'AIzaSyDUb1tv6tpZVVAfYTz9603MOrS-4J6zdBY',
				v: '3.17',
				libraries: 'weather,geometry,visualization'
			});
		})

})();