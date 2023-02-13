const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/test")
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log(err);
});


const Course = mongoose.Schema({
    name: {String, required: true},
    description: {String, required: false},
    price: {Number, required: true},
    model:{String}
})


async function createCourse(){
    const course = new Course({
        name: "Node.js",
        description: "Node.js is an open source JavaScript runtime.",
        price: 1000,
        model: "Node.js"
    })
    
    const result = await course.save()
    console.log(result)
}



createCourse()