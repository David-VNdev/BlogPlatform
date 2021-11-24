import Course from '../models/Course.js';
import {multipleMongooseToObject} from '../../util/mongoose.js';
class SiteController {
	// [GET] /
	index(req, res, next) {
		Course.find({})
			.then((courses) => {
				res.render('home', {courses:multipleMongooseToObject(courses)});
			})
			.catch(next);
	}

	// [GET] /news/:slug
	search(req, res) {
		res.render('search');
	}
}
export default new SiteController();
