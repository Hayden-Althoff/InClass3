import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  Relation,
  OneToMany,
} from 'typeorm';
import { AvatarPhoto } from './AvatarPhoto';
import { Review } from './Review';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @OneToOne(() => AvatarPhoto, (avatarPhoto) => avatarPhoto.user)
  @JoinColumn()
  avatarPhoto: Relation<AvatarPhoto>;

  @OneToMany(() => Review, (review) => review.user)
  reviews: Relation<Review>[];
}
