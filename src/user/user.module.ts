import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from 'src/providers/database.module';
import { userProviders } from './provider/user.providers';
import { IsUniqueConstraint } from './decorators/user.decorator';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...userProviders, UserService, IsUniqueConstraint],
})
export class UserModule {}
