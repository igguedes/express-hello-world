const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.setHeader('ngrok-skip-browser-warning', '2ZxT7ieANuhFsKBkTTj179BPMgs_23piMpEGtsJ4AZmkZx2y9');
    next();
  });

app.get('/cliente/:cpf', function(req, res){
    var clientes = {
        "06191318375": {
            id: 202,
            customer_name: "Igor"
        },
        "12312312312": {
            id: 400,
            customer_name: "Livia"
        }
    }
    res.json(clientes[req.params.cpf])
});


app.listen(3000);
