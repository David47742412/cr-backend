import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Injectable, Scope } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PostEntity } from '../v1/post/entities/post.entity';

@Injectable({ scope: Scope.TRANSIENT })
export class TypeormConfig {
  constructor(private readonly _config: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      database: this._config.getOrThrow<string>('database.name'),
      host: this._config.getOrThrow<string>('database.host'),
      port: this._config.getOrThrow<number>('database.port'),
      username: this._config.getOrThrow<string>('database.user'),
      password: this._config.getOrThrow<string>('database.password'),
      autoLoadEntities: true,
      connectTimeout: 30000,
      entities: [PostEntity],
      synchronize: true,
    };
  }
}
