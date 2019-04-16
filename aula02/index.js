/*
1 - get a user
2 - get a phone number of user by ID
3 - get a andress of user by ID
*/

function getUser()
{
    setTimeout(function (){
        return{
            id: 1,
            name: 'roger',
            dateNas: new Date()
        }
    }, 1000)
}

function getPhone(idUser){
     
}

function getAndress(idUser) {
     
}

 const usuario = getUser()
 //const phone = getPhone(user.id)

 console.log("usuário", usuario)