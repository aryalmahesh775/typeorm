import "reflect-metadata";
import express, { Request, Response } from "express";
import dataSource from "./datasource/dataSource";
import { User } from "./entities/User.entity";
import { Profile } from "./entities/Profile.entity";
import { Todo } from "./entities/Todo.entity";
import { Student } from "./entities/student.entity";
import { Course } from "./entities/Course.entity";

const app = express();
const PORT = 3000;

dataSource
  .initialize()
  .then(() => {
    console.log("Datasource successfully connected with database !!!");
  })
  .catch((err) => {
    console.log("DataSource connection Failed", err);
  });

// add user with todos
// app.get("/", async (req: Request, res: Response) => {
//   let userRepo = dataSource.getRepository(User);

//   const todo1 = new Todo();
//   todo1.title = "todo task 1";
//   todo1.description = "todo task 1 dec";

//   const todo2 = new Todo();
//   todo2.title = "todo task 2";
//   todo2.description = "todo task 2 dec";

//   const todo3 = new Todo();
//   todo3.title = "todo task 3";
//   todo3.description = "todo task 3 dec";

//   const user = new User();
//   user.firstName = "Asad";
//   user.lastName = "Javed";
//   user.isActive = true;
//   user.todos = [todo1, todo2, todo3];

//   let savedUser = await userRepo.save(user);

//   res.json(savedUser);
// });

// get user and todo data
app.get("/", async (req: Request, res: Response) => {
  // let studentRepo = dataSource.getRepository(Student);
  let coursesRepo = dataSource.getRepository(Course);

  // const course1 = new Course();
  // course1.code = "CS-001";
  // course1.title = "Computer Programming";

  // const course2 = new Course();
  // course2.code = "CS-002";
  // course2.title = "Computer Programming";

  // const student = new Student();
  // student.age = 22;
  // student.firstName = "Ahmad";
  // student.lastName = "Asad";
  // student.rollNo = "ST-001";
  // student.courses = [course1, course2];

  // let savedStudent = await studentRepo.save(student);
  let allCourses = await coursesRepo.find({
    relations: ["students"],
  });

  res.json(allCourses);
});

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});

// using the cascade without creating the profile first for one to one relation
// app.get("/", async (req: Request, res: Response) => {
//   let userRepo = dataSource.getRepository(User);

//   let profile = new Profile();
//   profile.gender = "Female";
//   profile.skill = "Video Editor";

//   let user = new User();
//   user.firstName = "Sara";
//   user.lastName = "Jamshed";
//   user.isActive = true;
//   user.profile = profile;

//   let savedUser = await userRepo.save(user);

//   res.json(savedUser);
// });

// Get all user
// app.get("/users", async (req: Request, res: Response) => {
//   let userRepo = dataSource.getRepository(User);

//   // let allUsers = await userRepo.find();   // for data but not all relation

//   // let allUsers = await userRepo.find({   // get data by defining relation
//   //   relations: ["profile"],
//   // });

//   let allUsers = await userRepo.find(); //use eager instead of lazy load in modal to get all relation

//   res.json(allUsers);
// });

// create by creating profile and then connecting with user for one to one relation
// app.get("/", async (req: Request, res: Response) => {
//   let profileRepo = dataSource.getRepository(Profile);
//   let userRepo = dataSource.getRepository(User);

//   let profile = new Profile();
//   profile.gender = "male";
//   profile.skill = "Photo Editor";

//   let saveProfile = await profileRepo.save(profile);

//   let user = new User();
//   user.firstName = "Afaq";
//   user.lastName = "Javed";
//   user.isActive = true;
//   user.profile = saveProfile;

//   let savedUser = await userRepo.save(user);

//   res.json(savedUser);
// });

// create by creating profile and then connecting with user for one to one relation both way
// app.get("/", async (req: Request, res: Response) => {
//   let profileRepo = dataSource.getRepository(Profile);
//   // let userRepo = dataSource.getRepository(User);

//   // let profile = new Profile();
//   // profile.gender = "female";
//   // profile.skill = "video Editor";

//   // let user = new User();
//   // user.firstName = "sara";
//   // user.lastName = "Javed";
//   // user.isActive = true;
//   // user.profile = profile;

//   // let savedUser = await userRepo.save(user);

//   // left to right
//   // user to profile
//   // let allUsers = await userRepo.find();
//   let allProfiles = await profileRepo.find({
//     relations: ["user"],
//   });

//   res.json(allProfiles);
// });

// app.get("/", async (req: Request, res: Response) => {
//   let userRepo = dataSource.getRepository(User);
//   res.json(await userRepo.update(2, { firstName: "saggy" }));
//   // res.json(await userRepo.delete(3));
//   // res.json(
//   //   await userRepo.find({
//   //     order: {
//   //       id: "DESC",
//   //     },
//   //   })
//   // );
// });

// -----------
// get user and todo data
// app.get("/", async (req: Request, res: Response) => {
//   // let userRepo = dataSource.getRepository(User);
//   let todoRepo = dataSource.getRepository(Todo);

//   // let allUsers = await userRepo.find({
//   //   relations: ["todos"],
//   // });

//   let allTodos = await todoRepo.find({
//     relations: ["user"],
//   });

//   res.json(allTodos);
// });
