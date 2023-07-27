import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { PostService } from './post.service';
import { PostDto } from './dto/create-post.dto';
import { Server, Socket } from 'socket.io';
import { uaAndIp } from '../const/const.provider';

@WebSocketGateway()
export class PostGateway {
  constructor(private readonly _postService: PostService) {}

  @WebSocketServer()
  private readonly _server: Server;

  @SubscribeMessage('post-create')
  create(
    @ConnectedSocket() client: Socket,
    @MessageBody() createPostDto: PostDto,
  ) {
    uaAndIp(createPostDto, client);
    const result = this._postService.create(createPostDto);
    result.subscribe((e) => {
      this._server.emit('post-findAll', e);
    });
    return result;
  }

  @SubscribeMessage('post-findAll')
  findAll(@ConnectedSocket() client: Socket) {
    return this._postService.findAll();
  }

  @SubscribeMessage('post-update')
  update(@MessageBody() updatePostDto: PostDto) {
    return this._postService.update(updatePostDto.id, updatePostDto);
  }

  @SubscribeMessage('post-remove')
  remove(@MessageBody() id: string) {
    return this._postService.remove(id);
  }
}
