export interface PostAlterDTO {
    title?: string,
    description?: string,
    files?: FileAlterDTO[]
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

export interface FileAlterDTO {
    name?: string,
    principal?: boolean,
    position?: number,
    data?: string
}