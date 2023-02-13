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

//deleting a course

async function deleteCourse(id) {
  let result = await Course.deleteOne({ _id: id });
  console.log(result);
}

//deleting many courses

async function deleteCourse() {
  let result = await Course.deleteMany({ salary: { $lt: 1000000 } });
  console.log(result);
}

deleteCourse("63ea29b09f2ffda0c023c3a9");
