const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/exercise")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err));

const mySchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean,
    tags: [String]
})


const Test = mongoose.model('Test', mySchema)   

async function testFinder(){
const test = await Test.find({isPublished: true})
                       .or([{price:{$gte: 15}}, {name:/.*by.*/i}])
    console.log(test)
}

testFinder()



