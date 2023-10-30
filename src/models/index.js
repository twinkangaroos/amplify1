// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Blog, BlogKangaroos } = initSchema(schema);

export {
  Blog,
  BlogKangaroos
};