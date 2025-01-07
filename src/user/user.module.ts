import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from 'src/providers/database.module';
import { userProviders } from './provider/user.providers';
import { IsUniqueConstraint } from './decorators/user.decorator';
import { UserEntity } from './entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService, IsUniqueConstraint],
})
export class UserModule {}