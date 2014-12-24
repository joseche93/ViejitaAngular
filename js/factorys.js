myApp.factory('game', function () {
    return {
        jugador: 0,
        tablero: [],
        iniciar: function() {
            this.jugador = 0;
            this.tablero[0] = [0, 0, 0];
            this.tablero[1] = [0, 0, 0];
            this.tablero[2] = [0, 0, 0];
            this.dibujar();
            console.log('JUEGA: Jugador['+this.jugador+']');
        },
        dibujar: function() {
            console.log('_____[0]_[1]_[2]_');
            for (var y = 0; y < this.tablero.length; y++){
                var temp = ' | '; 
                for (var x = 0; x < this.tablero[y].length; x++){
                    temp += this.tablero[y][x]+' | '; 
                }
                console.log('['+y+']' + temp);
                console.log('_________________');
            }
        },
        cambio: function() {
            this.jugador = this.jugador ? 0 : 1;
            this.dibujar();
            console.log('JUEGA: Jugador['+this.jugador+']');
        },
        jugada: function (x, y) {
            if (this.tablero[y][x] == 0){
                this.tablero[y][x] = this.jugador + 1;
                this.cambio()
            }else
                console.log('Posicion ya ocupada.')
        }   
    }
});