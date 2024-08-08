import { User } from "./user"

export interface Book {
    id: number
    title: string
    description: string
    user: User
}