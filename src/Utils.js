export async function delay() {
    return new Promise(resolve => setTimeout(() => {
        resolve()
    }, randomNumber(1000, 2000)))
}

export function randomNumber(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1))
}