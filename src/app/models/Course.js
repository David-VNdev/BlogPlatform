import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
	name: { type: String, minlength: 1, maxlength: 255, required: true },
	description: { type: String, minlength: 1, maxlength: 255 },
	image: { type: String, maxlength: 255 },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
	// slug: { type: String, minlength: 1, maxlength: 255, required: true , unique: true },
	videoId: { type: String, minlength: 1, maxlength: 255, required: true },
},{timestamps: true});

export default mongoose.model("Course", CourseSchema);
