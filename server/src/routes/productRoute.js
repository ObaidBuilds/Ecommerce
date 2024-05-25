import express from 'express'
import { createProduct, deleteProduct, updateProduct, getAllProduct, getProductByCategory } from '../controllers/productController.js'

const router = express.Router();

router.get('/:category', getProductByCategory)
router.get('/', getAllProduct)
router.post('/', createProduct)
router.delete('/:id', deleteProduct)
router.patch('/:id', updateProduct)

export default router





