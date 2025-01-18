import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { AccessTokenGuard } from '../access-token/access-token.guard';
import { enumTypes } from 'src/auth/enums/authTypes.enum';

@Injectable()
export class AuthGuardGuard implements CanActivate {
  private static readonly defaultOfType: enumTypes.Bearer;
  private readonly authTypeGuardMap: Record<
  enumTypes,
    CanActivate | CanActivate[]
  > = {
    [enumTypes.Bearer]: this.accessTokenGuard,
    [enumTypes.None]: { canActivate: () => true },
  };

  constructor(
    private readonly reflector: Reflector,
    private readonly accessTokenGuard: AccessTokenGuard,
  ) {}
  
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    return true;
  }
}