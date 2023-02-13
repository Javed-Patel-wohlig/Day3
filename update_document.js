const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });



  const courseSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      description: { type: String, required: false },
      salary: { type: Number, required: true },
      role: { String },
    },
    { timestamps: true }
  );
  
  const Course = mongoose.model("courses", courseSchema);
// updating in the database

async function updateCourse(id){
    let finding = await Course.findById(id)

    finding.set({
        name: "new things",
        salary: 20000
    })
    const result = await finding.save()
    console.log(result)
}

updateCourse('63ea29b09f2ffda0c023c3a9')

// updateing in the database without retrieving the document

async function updateCourse(id) {
  let memo = await Course.findByIdAndUpdate(
    id ,
    {
      $set: {
        name: "badshah",
        salary: 1000,
      },
    },
    { new: true }
  );
  console.log(memo);
}
