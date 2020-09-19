export interface PostSaveDTO {
    title?: string,
    description?: string,
    files?: FileSaveDTO[]
}

export interface FileSaveDTO {
    id?: number,
    name?: string,
    principal?: boolean,
    position?: number,
    data?: string,
    file?: File
}