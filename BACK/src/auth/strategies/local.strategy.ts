import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: "login" });
  }

  async validate(login: string, password: string): Promise<any> {
    const result = await this.authService.validateCredentials({
      login,
      password,
    });

    if (!result) {
      throw new UnauthorizedException();
    }

    return { login, password };
  }
}
