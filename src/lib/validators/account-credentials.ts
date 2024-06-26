import { string, z } from "zod"


export const AuthCredentialsValidator = z.object({
    email: string(),
    password: z.string().min(8, {message: 'Password must be at least 8 characters long'})
})

export type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>