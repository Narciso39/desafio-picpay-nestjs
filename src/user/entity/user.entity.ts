import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: number;

  @Column({
    name: 'nome_completo',
    default: 'Nome padrão', 
  })
  nomeCompleto: string;

  @Column({
    name: 'cpf_cnpj',
    default: '000.000.000-00', 
  })
  cpfCnpj: string;

  @Column({
    name: 'email',
    default: 'email@dominio.com', 
  })
  email: string;

  @Column({
    name: 'senha',
    default: 'senha123', 
  })
  senha: string;

  @Column({
    name: 'saldo_conta',
    default: 0, 
  })
  saldoConta: number;

  @Column({
    name: 'user_type',
    default: 'usuario', 
  })
  userType: string;
}
