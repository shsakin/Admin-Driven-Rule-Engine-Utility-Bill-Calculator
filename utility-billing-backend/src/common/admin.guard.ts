import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    if (req.headers['x-admin-key'] !== process.env.ADMIN_KEY) {
      throw new ForbiddenException('Invalid admin key');
    }
    return true;
  }
}
