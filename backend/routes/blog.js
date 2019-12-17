const express = require('express');
const blogRouter = express.Router();
const { getBlog } = require('./../controllers/blog');

blogRouter.get('/', getBlog);

module.exports = blogRouter;
