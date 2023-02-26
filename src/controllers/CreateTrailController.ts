import { Request, Response } from 'express';
import { prismaClient } from '../services/prismaClient';

export class CreateTrailController {
  async handle(request: Request, response: Response) {
    try {
      const { title, description, slug } = request.body;

      const trail = await prismaClient.trail.create({
        data: {
          title,
          description,
          slug,
        },
      });

      return response.status(200).json({ success: true, data: trail });
    } catch (error) {
      return response.status(500).json({ success: false, data: error });
    }
  }
}