import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export type UserDecType = { id: number; userName: string };

export const UserDec = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
