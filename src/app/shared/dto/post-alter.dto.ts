export interface PostAlterDTO {
    title?: string,
    description?: string,
    files?: FileAlterDTO[]
}

export interface FileAlterDTO {
    name?: string,
    principal?: boolean,
    position?: number,
    data?: string
}