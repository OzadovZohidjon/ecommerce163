export function sumQty(arr) {
    return arr.reduce((a, b) => a + b.qty, 0)
}

export function sumPrice(arr) {
    return arr.reduce((a, b) => a + b.qty * b.price, 0).toLocaleString()
}
