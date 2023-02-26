import { Request, Response } from 'express';
import { prismaClient } from '../services/prismaClient';

export class CreateStudentController {
  async handle(request: Request, response: Response) {
    try {
      const { name, email, password } = request.body;

      const student = await prismaClient.student.create({
        data: {
          name,
          email,
          password,
        },
      });

      return response.status(200).json({ success: true, data: student });
    } catch (error) {
      return response.status(500).json({ success: false, data: error });
    }
  }
}