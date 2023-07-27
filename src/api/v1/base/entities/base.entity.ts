import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class BaseEntity {
  @Column({ name: '_workspace_create__', type: 'varchar', length: 50 })
  workSpaceCreate: string;

  @Column({ name: '_workspace_update__', type: 'varchar', length: 50 })
  workSpaceUpdate: string;

  @CreateDateColumn({
    name: '_create_date__',
    type: 'datetime',
    nullable: true,
  })
  createDate: string;

  @CreateDateColumn({
    name: '_create_date__',
    type: 'datetime',
    nullable: true,
  })
  @UpdateDateColumn({
    name: '_update_date__',
    type: 'datetime',
    nullable: true,
  })
  createUpdate: string;

  @Column({ name: '_deleted__', type: 'boolean' })
  deleted: boolean;

  @Column({ name: '_ip_req__', type: 'varchar', length: 50 })
  ipReq: string;
}
