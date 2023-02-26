import { Request, Response } from 'express';
import { prismaClient } from '../services/prismaClient';

export class CreateLessonController {
  async handle(request: Request, response: Response) {
    try {
      const { title, description, slug, course_id } = request.body;

      const lesson = await prismaClient.lesson.create({
        data: {
          title,
          description,
          slug,
          course_id
        },
      });

      return response.status(200).json({ success: true, data: lesson });
    } catch (error) {
      return response.status(500).json({ success: false, data: error });
    }
  }
}