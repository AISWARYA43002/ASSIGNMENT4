const express=require ('express');
const router=express.Router();//router level middleware
router.use(express.json())   //express.json is a third party middleware
router.use(express.urlencoded ({extended:true}))
const employeeModel=require('../model/employeeData')


function basicroutes(nav){



router.get('/',async(req,res)=>{
    try {
        const data=await employeeModel.find();
        res.render('home',{
            data,
            nav
        });
    } catch (error) {
        res.status(404).send('No data');
    }
})

router.get('/addemp',(req,res)=>{
    res.render("employeeform",
        {nav})
    
})


router.post('/addemp',async(req,res)=>{
    try {
        var item=req.body;
        const data=new employeeModel(item);
        await data.save();
        res.redirect('/employee')
    } catch (error) {
        res.status(404).send('Post unsuccessfull!')
    }

})

router.get('/update/:id',async(req,res)=>{
    const data=await employeeModel.findOne({"_id":req.params.id});
    res.render('updateform',{
        id:req.params.id,
        data,nav

    })
})
router.post('/edit/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        await employeeModel.findByIdAndUpdate(id,req.body);
        res.redirect('/employee')
    } catch (error) {
        res.status(404).send('Update failed')
    }
})
router.get('/delete/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        await employeeModel.findByIdAndDelete(id,req.body);
        res.redirect('/employee')
    } catch (error) {
        res.status(404).send('Delete failed!')
    }
})
return router
}
module.exports=basicroutes
