import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PostEntity } from '../entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable } from 'rxjs';
import { IResponseApi } from '../../interface/response-api.interface';
import { PostDto } from '../dto/create-post.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class PostModel {
  constructor(
    @InjectRepository(PostEntity)
    private readonly _repository: Repository<PostEntity>,
  ) {}

  find(): Observable<IResponseApi<PostEntity>> {
    const response: IResponseApi<PostEntity> = {
      statusCode: 200,
      message: '',
      count: 0,
      body: [],
    };
    return new Observable<IResponseApi<PostEntity>>((observer) => {
      this._repository
        .find({ select: ['postId', 'description', 'title'] })
        .then((e) => {
          response.body = e;
          observer.next(response);
          observer.complete();
        });
    });
  }

  insert(post: PostDto) {
    return new Observable<IResponseApi<PostEntity>>((observer) => {
      try {
        const postId = uuid() as string;
        const object: PostEntity = {
          postId,
          title: post.title,
          description: post.description,
          _: {
            ipReq: post.ipReq,
            workSpaceCreate: post.wks,
            workSpaceUpdate: post.wks,
            deleted: false,
            createDate: undefined,
            createUpdate: undefined,
          },
        };
        this._repository.save(object).then(() => {
          this.find().subscribe((data) => {
            observer.next(data);
            observer.complete();
          });
        });
      } catch (ex: any) {
        console.log(ex.message);
      }
    });
  }

  update() {}

  delete() {}
}
