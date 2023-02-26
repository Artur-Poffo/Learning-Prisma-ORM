import { Request, Response } from 'express';
import { prismaClient } from '../services/prismaClient';

export class CreateCourseController {
  async handle(request: Request, response: Response) {
    try {
      const { title, description, slug, trail_id } = request.body;

      const course = await prismaClient.course.create({
        data: {
          title,
          description,
          slug,
          trail_id,
        },
      });

      return response.status(200).json({ success: true, data: course });
    } catch (error) {
      return response.status(500).json({ success: false, data: error });
    }
  }
}
