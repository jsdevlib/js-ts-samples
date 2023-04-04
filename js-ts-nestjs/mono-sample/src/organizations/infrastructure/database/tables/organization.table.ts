import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Organization {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column({ default: 1 })
  status: number;
}
