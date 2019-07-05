/* importar as configurações do servidor */
const app = require('./config/server');

/* Parametrizar a porta de escuta */
const server = app.listen(80, function(){
    console.log('Servidor Online')
})

const io = require('socket.io').listen(server);

app.set('io',io)

/* Criar a conexão por websocket */
io.on('connection',function(socket){
    console.log('Úsuario conectou');

    socket.on('disconnect',function(){
        console.log('Úsuario desconectou')
    })

    socket.on('msgParaServidor',function(data){
        
        /* Dialogo */

        socket.emit(
            'msgParaCliente',
            {apelido: data.apelido, mensagem: data.mensagem}
        )

        socket.broadcast.emit(
            'msgParaCliente',
            {apelido: data.apelido, mensagem: data.mensagem}
        )

        /* Participantes */
        
        if(parseInt(data.apelido_atualizado_nos_clientes) == 0){
            socket.emit(
                'participantesParaCliente',
                {apelido: data.apelido}
            )

            socket.broadcast.emit(
                'participantesParaCliente',
                {apelido: data.apelido}
            )

        }

    })
})