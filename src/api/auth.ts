import { setLocalStorage } from '../helpers/localStorage';
import {
  GetRequest,
  PostRequest,
} from '../services/httpRequest';
import { requestHandler } from '../services/requestHandler';
import { LoginResponse } from '../utils/types/auth';

interface UserSession{
    user: {
        email: string;
        username: string;
        user_type: string;
    }
}

export const registerUser = requestHandler<any, unknown>(async (params) => {
    return PostRequest("auth/register", params);
})

export const loginUser = requestHandler<any, LoginResponse>(async (params) => {
    return PostRequest("auth/login", params);
});

export const setToken = (token: string) => {
    setLocalStorage("pitc-token", token);
}

export const setRefreshToken = (token: string) => {
    setLocalStorage("pitc-refresh-token", token);
}

export const getUserProfile = requestHandler<any, UserSession>(async (params) => {
    return GetRequest("user/session", params);
})

export const checkAdmin = requestHandler<any, UserSession>(async () => {
    return GetRequest("user/isAdmin");
})