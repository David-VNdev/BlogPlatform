import mongoose from "mongoose";

export const multipleMongooseToObject = function (array) {
	return array.map(function (item) {
		return item.toObject();
	});
};

export const mongooseToObject = function (item) {
	return item.toObject();
};
