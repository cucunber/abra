export const isObject = (target: unknown): target is object => {
    return typeof target === 'object' && target !== null;
}