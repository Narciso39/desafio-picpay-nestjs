import {
  IsDecimal,
  IsEmail,
  IsIn,
  IsString,
  ValidateIf,
} from 'class-validator';
import { IsUnique } from '../decorators/user.decorator';

export class CreateUserDto {
  @IsString()
  nomeCompleto: string;
  
  @IsString()
  @IsUnique('cpfCnpj', { message: 'O CPF/CNPJ já está em uso.' })
  cpfCnpj: string;

  @IsEmail()
  @IsUnique('email', { message: 'O email já está em uso.' })
  email: string;

  @IsString()
  senha: string;

  @IsDecimal()
  saldoConta: number;
  
  @ValidateIf((obj) => obj.role === 'empresa' || obj.role === 'usuario')
  @IsString()
  @IsIn(['empresa', 'usuario'])
  userType: string;
}
