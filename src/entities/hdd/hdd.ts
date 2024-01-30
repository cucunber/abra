import { IFile, IHDD } from "./hdd.type";

export function File({ id, size }: IFile): IFile {
    return {
        id,
        size
    }
}

export function HDD({ size, segment, files }: IHDD): IHDD {
    return {
        size,
        segment,
        files
    }
}