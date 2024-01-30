export interface IFile {
    id: number,
    size: number;
}

export interface IHDD {
    size: number;
    segment: number;
    files: IFile[]
}