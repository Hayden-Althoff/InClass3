import { Entity, PrimaryGeneratedColumn, Column, Relation, ManyToMany } from 'typeorm';
import { Book } from './Book';

@Entity()
export class Author {
  @PrimaryGeneratedColumn('uuid')
  authorId: number;

  @Column()
  authorName: string;

  @Column()
  originCountry: string = 'Unknown';

  @ManyToMany(() => Book, (books) => books.author, { cascade: ['insert', 'update'] })
  books: Relation<Author>[];
}
