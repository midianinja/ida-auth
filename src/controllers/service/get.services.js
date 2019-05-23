import mongoose from 'mongoose';

/**
 * function that get all services on database 
 * @param  {boolean} isPublic filter to return public or private services
 * @returns {Promise} containt an array of private or public services
 */
export const getAll = (isPublic = false) => {
	const Services = mongoose.model('services');
	return Services.findAll({ is_public: isPublic })
};

/**
 * function that get all services on database 
 * @param  {string} _id filter to return service whose the _id or path is equals 
 * @returns {Promise} containt an array of private or public services
 */
export const getOne = (path, isPublic = false) => {
	const Services = mongoose.model('services');
	return Services.findOne({ path, is_public: isPublic })
};
