import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { LoginRequestDto } from "./dto/login-request.dto";
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService
  ) {}

  async validateCredentials(loginRequestDto: LoginRequestDto) {
    const { login, password } = loginRequestDto;
    if (
      login === this.configService.get("LOGIN") &&
      password === this.configService.get("PASSWORD")
    ) {
      return { username: login };
    }
    return null;
  }

  async login(user: any) {
    const payload = { login: user.login };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
