module.exports.iniciaChat = function(application, req, res){
    
    const dadosForm = req.body;

    //req.assert('apelido','Nome ou apelido obrigatorio').notEmpty()
    //req.assert('apelido','Nome ou apelido deve conter entre 3 a 1 caracteres').len(3,15)

    //const erros = req.validationError();

    //if(erros){
    //    res.render("index", {validacao: erros})
        //return;
    //}

    application.get('io').emit(
        "msgParaCliente",
        {apelido: dadosForm.apelido, mensagem: ' acabou de entrar no chat'}
    )

    res.render('chat',{dadosForm: dadosForm});

    

}