import Course from '../models/Course.js';
import {multipleMongooseToObject} from '../../util/mongoose.js';

class MeController {
	// [GET] /me/storedCourses
	storedCourses(req, res, next) {
		Course.find({})
			.then((courses) => {
				res.render('./me/storedCourses', {courses:multipleMongooseToObject(courses)});
			})
			.catch(next);
	}
	// [GET] /me/trashCourses

	trashCourses(req, res, next) {
		Course.findDeleted()
			.then((courses) => {
				res.render('./me/deletedCourses', {courses:multipleMongooseToObject(courses)});
			})
			.catch(next);
	}
	
}
export default new MeController();
