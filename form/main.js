$('document').ready(function(){

    $('form').validate({
        rules:{
            nome:{
                required:true
            },
            email:{
                required:true,
                email: true
            },
            mensagem:{
                required:true
            },
            check:{
                required:true
            }
        }
    })
    })