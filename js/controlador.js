myApp.controller('controlador', function ($scope, game){
	console.log(game.jugador);
	game.cambio();
	console.log(game.jugador);

});