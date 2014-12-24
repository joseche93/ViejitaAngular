app.factory('game', function () {
    return {
        jugador: 0,
        tablero: [],
        iniciar: function() {
            jugador = 0;
            tablero[0] = [0, 0, 0];
            tablero[1] = [0, 0, 0];
            tablero[2] = [0, 0, 0];
            dibujar();
            console.log('JUEGA: Jugador['+jugador+']');
        },
        dibujar: function() {
            console.log('_____[0]_[1]_[2]_');
            for (var y = 0; y < tablero.length; y++){
                var temp = ' | '; 
                for (var x = 0; x < tablero[y].length; x++){
                    temp += tablero[y][x]+' | '; 
                }
                console.log('['+y+']' + temp);
                console.log('_________________');
            }
        },
        cambio: function() {
            jugador = jugador ? 0 : 1;
            dibujar();
            console.log('JUEGA: Jugador['+jugador+']');
        },
        jugada: function (x, y) {
            if (tablero[y][x] == 0){
                tablero[y][x] = jugador + 1;
                cambio()
            }else
                console.log('Posicion ya ocupada.')
        }   
    }
});