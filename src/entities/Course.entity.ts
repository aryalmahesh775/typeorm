import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToOne,
  ManyToMany,
} from "typeorm";
import { User } from "./User.entity";
import { Student } from "./student.entity";

@Entity({ name: "Course" })
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  code: string;
  @ManyToMany(() => Student, (student) => student.courses)
  students: Student[];
}
