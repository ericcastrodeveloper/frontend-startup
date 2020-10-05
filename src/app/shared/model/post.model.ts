export interface PostModel {
    id?: number,
    title?: string,
    description?: string,
    files?: FileModel[],
    status?: string,
    likes?: Like[],
    helpWork?: boolean,
    helpBudget?: boolean,
    cep?: string,
    addressComplement?: string,
    cellphone?: string,
    howHelp?: string,
    category?: string,
    email?: string,
    responsible?: string,
    helpBudgetAmount?: number,
    helpWorkCategory?: string
}
export interface Like {
    id?: number,
    dtCriacao?: Date,
    usuario?: number,
}

export interface FileModel {
    id?: number,
    name?: string,
    principal?: boolean,
    position?: number,
    data?: string,
}