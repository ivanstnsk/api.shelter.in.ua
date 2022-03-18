import { GraphQLResolveInfo } from 'graphql';
import { AppContext } from '../types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CitiesInput = {
  filter?: InputMaybe<CititesFilter>;
};

export type CitiesPayload = {
  __typename?: 'CitiesPayload';
  cities: Array<City>;
  totalCount: Scalars['Int'];
};

export type CititesFilter = {
  level_1?: InputMaybe<Scalars['Int']>;
  level_2?: InputMaybe<Scalars['Int']>;
  level_3?: InputMaybe<Scalars['Int']>;
  level_4?: InputMaybe<Scalars['Int']>;
};

export type City = {
  __typename?: 'City';
  community: Scalars['String'];
  level_1: Scalars['Int'];
  level_2: Scalars['Int'];
  level_3: Scalars['Int'];
  level_4: Scalars['Int'];
  object_category: Scalars['String'];
  object_code: Scalars['Int'];
  object_name: Scalars['String'];
  region: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  cities: CitiesPayload;
};


export type QueryCitiesArgs = {
  input?: InputMaybe<CitiesInput>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CitiesInput: CitiesInput;
  CitiesPayload: ResolverTypeWrapper<CitiesPayload>;
  CititesFilter: CititesFilter;
  City: ResolverTypeWrapper<City>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  CitiesInput: CitiesInput;
  CitiesPayload: CitiesPayload;
  CititesFilter: CititesFilter;
  City: City;
  Int: Scalars['Int'];
  Query: {};
  String: Scalars['String'];
};

export type CitiesPayloadResolvers<ContextType = AppContext, ParentType extends ResolversParentTypes['CitiesPayload'] = ResolversParentTypes['CitiesPayload']> = {
  cities?: Resolver<Array<ResolversTypes['City']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CityResolvers<ContextType = AppContext, ParentType extends ResolversParentTypes['City'] = ResolversParentTypes['City']> = {
  community?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  level_1?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level_2?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level_3?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level_4?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  object_category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  object_code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  object_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  region?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = AppContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  cities?: Resolver<ResolversTypes['CitiesPayload'], ParentType, ContextType, RequireFields<QueryCitiesArgs, never>>;
};

export type Resolvers<ContextType = AppContext> = {
  CitiesPayload?: CitiesPayloadResolvers<ContextType>;
  City?: CityResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

