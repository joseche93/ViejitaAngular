myApp.controller('controlador', function ($scope, game){
	game.iniciar();
	$scope.iniciar = function(){
		game.iniciar();
	};
});