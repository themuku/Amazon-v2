import { Prisma } from '@prisma/client';
import { returnUserObject } from 'src/user/return-user.object';

export const returnReviewObject: Prisma.ReviewSelect = {
  text: true,
  id: true,
  rating: true,
  createdAt: true,
  user: {
    select: returnUserObject,
  },
};
