import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Relation,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Review } from './Review';
import { Author } from './Author';

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  bookId: number;

  @Column()
  title: string;

  @Column()
  yearPublished: number | null;

  @Column()
  publicDomain: boolean = false;

  @OneToMany(() => Review, (review) => review.book, { cascade: ['insert', 'update'] })
  review: Relation<Review>[];

  @ManyToMany(() => Author, (author) => author.books, { cascade: ['insert', 'update'] })
  @JoinTable()
  author: Relation<Book>[];
}
