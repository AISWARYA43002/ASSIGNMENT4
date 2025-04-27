const express=require('express');
const app=new express();
const morgan=require ('morgan');
app.use(morgan('dev'));
require('dotenv').config();
require('./db/connection');
app.set('view engine','ejs');
app.set("views",__dirname+'/views');  
app.use(express.static('public'));

const nav=[{name:'Home',link:'/employee'},
    {name:'Add Employee',link:'/employee/addemp'} 
]
const basicRoutes=require('./Routes/basicRoutes')(nav);
app.use('/employee',basicRoutes);//redirecting basic routes    //change the position give here




app.listen(process.env.PORT,()=>{console.log(`Server is running on PORT ${process.env.PORT}`);
})
