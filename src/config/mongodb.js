
import mongoose from 'mongoose'
const DB_NAME='BlogApp'

const uri = `mongodb+srv://cinthiasanchezr1997:Admin@cluster0.lrq0msm.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
export const mongoDbConnection=async()=>{
    try {
        await mongoose.set('strictQuery', false).connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          })
        console.log('conexion exitosa')
    } catch (error) {
        console.error('fallo conexion')
        process.exit(1)
    }
}


