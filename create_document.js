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
  
//   creating a new document
  
  async function createCourse(){
      const course = new Course({
          name: "Software Engineering",
          description: "IT field.",
          salary: 20000,
          role: "backend",
      })
  
      const result = await course.save()
      console.log(result)
  }
  
  createCourse()