const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.get('/tenso2', (request, response) => {   
    response.send('Tenso');
})





app.post('/soma',(request, response) => {
    const body = request.body;
    const numero1 = body.numero1;
    const numero2 = body.numero2;
    const resultado = {
        resultado: numero1 + numero2
    }
    response.send(resultado);

})


app.get('/noticias', (request, response)=>{
    const noticia = {
        id :1,
        texto: "The game",
        autor: "Tenso99"
    }
    response.send(noticia);
})

app.get('/tenso1/minecraft2', (request, response) => {   
    response.send('<html><body><button <a href=youtube.com/>FUNCIONAAAAAAAAAAAAAAAAAAAAA</a></button> </body></html>');
})

app.listen(port, () => {
    console.log("servidor iniciado na porta" + port)
})

//response.send('<html><body><button herf="youtube.com">Click Me!</button> </body></html>');