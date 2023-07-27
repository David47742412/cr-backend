import { Column, Entity, PrimaryColumn } from 'typeorm';
import { BaseEntity } from '../../base/entities/base.entity';

@Entity({ name: 'post' })
export class PostEntity {
  @PrimaryColumn({
    name: 'post_id',
    type: 'varchar',
    length: 36,
    primary: true,
    primaryKeyConstraintName: 'pk_post_id',
  })
  postId: string;

  @Column({ name: 'title', type: 'nvarchar', length: 300 })
  title: string;

  @Column({ name: 'description', type: 'nvarchar', length: 1000 })
  description: string;

  @Column(() => BaseEntity)
  _: BaseEntity;
}
