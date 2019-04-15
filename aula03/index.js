
function obterUsuario(callback){
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(function(){
            return resolve({
                id: 1,
                nome: 'Aladin',
                data: new Date()
            }) 
        },1000);
    })
}

function obterTelefone(idUsario, callback){
    setTimeout(() => {
        return callback(null, {
            telefone: '12386913',
            ddd: 11
        })
    }, 2000);
}