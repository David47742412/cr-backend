import { Injectable } from '@nestjs/common';
import { PostDto } from './dto/create-post.dto';
import { PostModel } from './model/post.model';

@Injectable()
export class PostService {
  constructor(private readonly _model: PostModel) {}

  create(postDto: PostDto) {
    return this._model.insert(postDto);
  }

  findAll() {
    return this._model.find();
  }

  update(id: string, postDto: PostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: string) {
    return `This action removes a #${id} post`;
  }
}
