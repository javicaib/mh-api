import dotenv from "dotenv";
import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
dotenv.config()
console.log(dotenv);


try {
    mongoose.connect(process.env.MONGO_URI_DEV).then(() => console.log("DB CONNECT"))
} catch (error) {
    console.log(error)
}

const monsterSchema = mongoose.Schema({
    name: String,
    type: String,
    weakness: [String],
})
monsterSchema.plugin(mongoosePaginate)
const Modelo = mongoose.model('monsters', monsterSchema);


export async function findAllMonsters(page) {
    const options = {
        page: Number(page),
        limit: 10,
    };
    return await Modelo.paginate({}, options).then({})
}

export async function findByMonsters(query, param) {
    if (query === "name") {
        return await Modelo.find({ name: { "$regex": param } })
    }
    if (query === "type") {
        return await Modelo.find({ type: { "$regex": param } })
    }
    if (query === "weak") {
        return await Modelo.find({ weakness: { "$regex": param } })
    }
    else return false
}