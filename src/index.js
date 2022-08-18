const express=require('express'); 
const path=require('path');


const app=express();
// setings
app.set('port',process.env.PORT || '3000');

app.use(express.json());

app.use(express.static(path.join(__dirname,'public') ));



//antes de la ruta se puede pasar como parametro una ruta inicial para las peticiones 

const servidor=app.listen(app.get('port'),()=>{
   console.log("servidor conectado");
});