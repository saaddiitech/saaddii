import mongoose from "mongoose";

  export   const connectDB = async () => {
    await mongoose.connect('mongodb+srv://saaddiitech:11223344@cluster0.wrvae8a.mongodb.net/AISUSHI').then(()=>console.log("DB Connected"));
} 