import { LoginRequestDto } from "./dto/login-request.dto";
import { Controller, Body, Post, UseGuards, Request } from "@nestjs/common";

import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./guards/local-auth.guard";

@Controller("login")
export class LoginController {
  constructor(private authService: AuthService) {}

  @Post()
  @UseGuards(LocalAuthGuard)
  login(@Request() req) {
    return this.authService.login(req.user);
  }
}
