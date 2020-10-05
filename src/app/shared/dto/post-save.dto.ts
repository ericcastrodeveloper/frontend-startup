export interface PostSaveDTO {
    title?: string,
    description?: string,
    files?: FileSaveDTO[],
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

export interface FileSaveDTO {
    id?: number,
    name?: string,
    principal?: boolean,
    position?: number,
    data?: string,
    file?: File
}