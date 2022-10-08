function do1<T>(val: T):T {
    return val
}
let a: {
    name: string,
    age: number,
} = {
    name: '123',
    age: 45
}
let res = do1(a)