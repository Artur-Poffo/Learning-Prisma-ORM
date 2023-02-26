import { Request, Response } from 'express';
import { prismaClient } from '../services/prismaClient';

export class CreateEnrollmentController {
  async handle(request: Request, response: Response) {
    try {
      const { student_id, trail_id } = request.body;

      const enrollment = await prismaClient.enrollment.create({
        data: {
          student_id,
          trail_id
        },
      });

      return response.status(200).json({ success: true, data: enrollment });
    } catch (error) {
      return response.status(500).json({ success: false, data: error });
    }
  }
}