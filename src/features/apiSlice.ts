import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { DataProps } from './model';

type UserResponse = DataProps[]

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/',
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<
      UserResponse,
      void
    >({
      query: () => 'users',
    }),

    getSingleUser: builder.query<
      DataProps,
      string
    >({
      query: (id) => `users/${id}`,
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetSingleUserQuery,
} = usersApi;
