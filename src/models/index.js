// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Test, Blog, Post, Comment } = initSchema(schema);

export {
  Test,
  Blog,
  Post,
  Comment
};