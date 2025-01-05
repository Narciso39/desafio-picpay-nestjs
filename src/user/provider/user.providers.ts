import { DataSource } from 'typeorm';
import { UserEntity } from '../entity/user.entity';

export const userProviders = [
  {
    provide: 'user',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(UserEntity),
    inject: ['DATA_SOURCE'],
  },
];