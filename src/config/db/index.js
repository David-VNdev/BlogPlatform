import mongoose from 'mongoose';

async function connect() {
	try {
		await mongoose.connect('mongodb://localhost:27017/course_nodeJS_module', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('Connected to database');
	} catch (err) {
		console.log(err);
	}
}

export default { connect };
