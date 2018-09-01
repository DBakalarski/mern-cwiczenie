import { Router } from 'express';
import * as BookController from '../controllers/book.controller';
const router = new Router();

// Get all books
router.route('/books').get(BookController.getBooks);

// Remove book
router.route('/book/:id').delete(BookController.removeBook);

export default router;
