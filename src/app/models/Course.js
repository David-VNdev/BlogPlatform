import mongoose from 'mongoose';
import mongoose_delete from 'mongoose-delete';
const Schema = mongoose.Schema;

const CourseSchema = new Schema(
	{
		name: { type: String, minlength: 1, maxlength: 255, required: true },
		description: { type: String, minlength: 1, maxlength: 255 },
		image: { type: String, maxlength: 255 },
		createdAt: { type: Date, default: Date.now },
		updatedAt: { type: Date, default: Date.now },
		// slug: { type: String, minlength: 1, maxlength: 255, required: true , unique: true },
		videoId: { type: String, minlength: 1, maxlength: 255, required: true },
	},
	{ timestamps: true }
);

// Add plugin
CourseSchema.plugin(mongoose_delete, { overrideMethods: 'all', deletedAt: true });
export default mongoose.model('Course', CourseSchema);
