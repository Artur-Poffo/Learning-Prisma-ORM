import { Router } from 'express';

import { CreateStudentController } from '../controllers/CreateStudentController';
import { CreateEnrollmentController } from '../controllers/CreateEnrollmentContoller';
import { CreateTrailController } from '../controllers/CreateTrailController';
import { CreateCourseController } from '../controllers/CreateCourseController';
import { CreateLessonController } from '../controllers/CreateLessonController';

const router = Router();

const createStudentController = new CreateStudentController();
const createEnrollmentController = new CreateEnrollmentController();
const createTrailController = new CreateTrailController();
const createCourseController = new CreateCourseController();
const createLessonController = new CreateLessonController();

router.get('/', (req, res) => res.send('Welcome!!!'));

router.post('/students', createStudentController.handle);
router.post('/trails', createTrailController.handle);
router.post('/courses', createCourseController.handle);
router.post('/lessons', createLessonController.handle);
router.post('/enrollments', createEnrollmentController.handle);

export default router;
