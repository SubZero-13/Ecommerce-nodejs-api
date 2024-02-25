const asyncHandler = require("express-async-handler");
const Category = require('../models/index.js');

const getCategoryList = asyncHandler(async (req, res) => {
    try {
      const categories = await Category.findAll({ attributes: ['category_id', 'name', 'description'] });
        res.json(categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500);
        throw new Error('Failed to fetch categories');
      }
});

module.exports = {
  getCategoryList
};
