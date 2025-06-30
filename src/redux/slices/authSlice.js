// store/api/authApi.js
import { createApi } from '@reduxjs/toolkit/query/react';
// store/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { axiosBaseQuery } from '../api/axiosBaseQuery';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: axiosBaseQuery(),
    tagTypes: ['User'],
    endpoints: (builder) => ({
      // Login
      login: builder.mutation({
        query: (credentials) => ({
          url: '/auth/login',
          method: 'POST',
          data: credentials,
        }),
        invalidatesTags: ['User'],
      }),
      otpEmail: builder.mutation({
        query: (credentials) => ({
          url: '/auth/otp',
          method: 'POST',
          data: credentials,
        }),
        invalidatesTags: ['User'],
      }),
      
      // Register
      register: builder.mutation({
        query: (userData) => ({
          url: '/auth/create-account',
          method: 'POST',
          data: userData,
        }),
      }),
  
      // Verify OTP
      verifyOtp: builder.mutation({
        query: (otpData) => ({
          url: '/auth/verify',
          method: 'POST',
          data: otpData,
        }),
      }),
  
      // Resend OTP
      resendOtp: builder.mutation({
        query: (email) => ({
          url: '/auth/resend-otp',
          method: 'POST',
          data: { email },
        }),
      }),
  
      // Forgot Password
      forgotPassword: builder.mutation({
        query: (email) => ({
          url: '/auth/forgot-password',
          method: 'POST',
          data: { email },
        }),
      }),
  
      // Reset Password
      resetPassword: builder.mutation({
        query: (resetData) => ({
          url: '/auth/reset-password',
          method: 'POST',
          data: resetData,
        }),
      }),
  
      // Get User Profile
      getUserProfile: builder.query({
        query: () => ({
          url: '/auth/profile',
          method: 'GET',
          authType: 'store',
        }),
        providesTags: ['User'],
      }),
  
      // Logout
      logout: builder.mutation({
        query: () => ({
          url: '/auth/logout',
          method: 'POST',
          authType: 'store',
        }),
        invalidatesTags: ['User'],
      }),
  
      // Refresh Token
      refreshToken: builder.mutation({
        query: () => ({
          url: '/auth/refresh-token',
          method: 'POST',
          data: { refreshToken: localStorage.getItem('refresh_token') },
        }),
      }),

      changePassword: builder.mutation({
        query: (data) =>( {
          url: "/auth/change-password", 
          method: "PATCH",
          data
        } )
      })
    }),
  });
  
  export const {
    useLoginMutation,
    useRegisterMutation,
    useOtpEmailMutation,
    useVerifyOtpMutation,
    useResendOtpMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation,
    useGetUserProfileQuery,
    useLogoutMutation,
    useRefreshTokenMutation,
    useChangePasswordMutation, 
  } = authApi;


  const initialState = {
    user: null,
    token: localStorage.getItem('store_token'),
    isAuthenticated: !!localStorage.getItem('store_token'),
    loading: false,
    error: null,
  };
  
  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setCredentials: (state, action) => {
        const { accessToken, ...user } = action.payload;
        state.user = user;
        state.token = accessToken;
        state.isAuthenticated = true;
        localStorage.setItem('user_token', accessToken);
      },
      logoutUser: (state, action) => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        localStorage.removeItem('store_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user_token');
        action.payload.navigate("/login")
        
      },
      clearError: (state) => {
        state.error = null;
      },
      setLoading: (state, action) => {
        state.loading = action.payload;
      },
      setError: (state, action) => {
        state.error = action.payload;
      },
    },
  });
  
  export const { setCredentials, logoutUser, clearError, setLoading, setError } = authSlice.actions;
  export default authSlice.reducer;
  