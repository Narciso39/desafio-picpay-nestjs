import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'user'})
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
