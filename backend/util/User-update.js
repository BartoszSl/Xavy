const Auth = require('../models/Auth');

const updateImage = async (userId, newImage) => {
	try {
		const user = await Auth.findOne({ _id: userId });

		if (!user) {
			throw new Error('User not found');
		}

		user.image = newImage;

		await user.save();

		console.log('Successfully updated image');
		console.log(user);

		return { success: true, message: 'Image updated successfully' };
	} catch (error) {
		console.error(error);
		throw new Error('Error updating image');
	}
};

module.exports = { updateImage };
