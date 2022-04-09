import "reflect-metadata";
import { createConnection, getEntityManager } from "@typedorm/core";
import { User } from "./entities/user.entity";
import { appTable } from "./table";
import AWS from 'aws-sdk';

AWS.config.update({region:'us-east-1'});

createConnection({
  table: appTable,
  entities: [User],
});

const user = new User();
user.name = "Loki";
user.status = "active";


// create user record
getEntityManager()
  .create(user)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
