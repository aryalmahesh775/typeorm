import { DataSource } from "typeorm";
import { User } from "../entities/User.entity";
import { Profile } from "../entities/Profile.entity";
import { Todo } from "../entities/Todo.entity";
import { Student } from "../entities/student.entity";
import { Course } from "../entities/Course.entity";

const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "password",
  database: "typeorm",
  logging: true,
  synchronize: true,
  entities: [User, Profile, Todo, Student, Course],
});

export default dataSource;
