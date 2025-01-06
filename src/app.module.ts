import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseProviders } from './providers/database.providers';



@Module({
  imports: [TypeOrmModule.forRoot(databaseProviders), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
