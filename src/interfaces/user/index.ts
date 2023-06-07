import { Icontacts } from "../contacts"


export interface IUserCreateRequest {
    name: string
    email: string
    password: string
    telefones: string[]
}


export interface IUserCreateResponse {
    id: string
    name: string
    email: string
    password: string
    telefones: string[]
    contacts: Icontacts[]
}


export interface IUserUpdateRequest {
    name: string | undefined
    email: string | undefined
    password: string | undefined
    telefones: string[] | undefined
}

export interface IUserUpdateResponse {
    id: string
    name: string | undefined
    email: string | undefined
    telefones: string[] | undefined
    createdAt: Date
    updatedAt: Date
    contacts: Icontacts[]
}


