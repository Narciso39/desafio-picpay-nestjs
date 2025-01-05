import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
  } from 'class-validator';
  import { Injectable } from '@nestjs/common';
  import { Repository } from 'typeorm';
  import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entity/user.entity';

  
  @ValidatorConstraint({ async: true })
  @Injectable()
  export class IsUniqueConstraint implements ValidatorConstraintInterface {
    constructor(
      @InjectRepository(UserEntity)
      private readonly userRepository: Repository<UserEntity>,
    ) {}
  
    async validate(value: any, args: any): Promise<boolean> {
      const [property] = args.constraints;
      const existingUser = await this.userRepository.findOneBy({ [property]: value });
      return !existingUser; 
    }
  
    defaultMessage(args: any): string {
      const [property] = args.constraints;
      return `${property} já está em uso.`;
    }
  }
  
  
  export function IsUnique(property: string, validationOptions?: ValidationOptions) {
    return function (object: any, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [property],
        validator: IsUniqueConstraint,
      });
    };
  }
  