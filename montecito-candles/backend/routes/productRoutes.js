import express from 'express';
import { getAllProducts, createProduct, getProductById } from '../controllers/productController.js';

const router = express.Router();

router.get('/', getAllProducts);
router.post('/', createProduct);
router.get('/:id', getProductById);

export default router; // <-- Add this default export
