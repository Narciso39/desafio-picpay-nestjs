import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nomeCompleto: string;

    @Column()
    cpfCnpj: string;

    @Column()
    email: string;

    @Column()
    senha: string;

    @Column()
    saldoConta: number;

    @Column()
    userType: string;

    
}
