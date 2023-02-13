
const courseSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      description: { type: String, required: true },
      salary: { type: Number, required: true },
      model: { String },
    },
    { timestamps: true }
  );
  