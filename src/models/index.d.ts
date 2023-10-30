import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerBlog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Blog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBlog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Blog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Blog = LazyLoading extends LazyLoadingDisabled ? EagerBlog : LazyBlog

export declare const Blog: (new (init: ModelInit<Blog>) => Blog) & {
  copyOf(source: Blog, mutator: (draft: MutableModel<Blog>) => MutableModel<Blog> | void): Blog;
}

type EagerBlogKangaroos = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BlogKangaroos, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBlogKangaroos = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BlogKangaroos, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BlogKangaroos = LazyLoading extends LazyLoadingDisabled ? EagerBlogKangaroos : LazyBlogKangaroos

export declare const BlogKangaroos: (new (init: ModelInit<BlogKangaroos>) => BlogKangaroos) & {
  copyOf(source: BlogKangaroos, mutator: (draft: MutableModel<BlogKangaroos>) => MutableModel<BlogKangaroos> | void): BlogKangaroos;
}