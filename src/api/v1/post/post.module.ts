import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostGateway } from './post.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './entities/post.entity';
import { PostModel } from './model/post.model';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity])],
  providers: [PostGateway, PostService, PostModel],
})
export class PostModule {}
