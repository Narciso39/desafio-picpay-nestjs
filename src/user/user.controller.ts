import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user-create.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/all')
  async findall() {
    return this.userService.findAll();
  }

  @Post('/create')
  async create(@Body() CreateUserDto: CreateUserDto) {
    return this.userService.create(CreateUserDto)
  }
}
