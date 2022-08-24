export interface user {
    email: string,
    passsword: string,
    userName: string
}
export default interface authtype {
    user: user,
    login: (data: any) => Promise<void>,
    logout: () => void
}