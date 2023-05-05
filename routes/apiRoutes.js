let router = require('express').Router()
let APIController = require('../controllers/api')

let apiController = new APIController()

router.get('/test', apiController.test)
router.get('/get-articles', apiController.getArticlesPreview)
router.get('/get-article/:id', apiController.getFullArticle)
router.get('/get-related', apiController.getRandomRelated)
router.post('/create-article', apiController.createArticle)

module.exports = router