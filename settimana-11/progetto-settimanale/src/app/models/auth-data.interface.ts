export interface AuthData {
    accessToken: string,
    user: {
        name: string,
        id: string,
        email: string
    }
}