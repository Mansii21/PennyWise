const IncomeSchema=require("../models/incomeModel")
exports.addIncome=async(req,res)=>{
    const {title,amount,category,description,date}=req.body
    const income=IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })
    try{
        //validations
        if(!title || !amount || !category || !description || !date){
            return res.send(400).json({message:'All fields are required'})
        }
        if(amount<=0 || !amount==='number'){
            return res.send(400).json({message:'amount must be a positive number'})
        }
        await income.save();
        res.status(200).json({message:"Income added bitch"})
    }catch{
        res.status(500).json({message:"Server Error"})
    }
    console.log(income)
}
exports.getIncomes=async(req,res)=>{
    try{
        const Incomes=await IncomeSchema.find().sort({createdAt:-1})
        res.status(200).json(Incomes)
    }catch(error){
        res.status(500).json({message:"Server Error"})
    }
}
exports.deleteIncome=async(req,res)=>{
    const {id}=req.params;
    console.log(req.params);
    IncomeSchema.findByIdAndDelete(id)
        .then((income)=>{
            res.status(200).json({message:"Income deleted"})
        })
        .catch((error)=>{
             res.status(500).json({message:"Server Error"})
        })
}