import { createRequire } from "node:module";

export const require = createRequire(import.meta.url)

const numeros = [1, 2, 3, 4]
const numeroEncontrado = numeros.findIndex(numero => numero === "seis")
console.log(numeroEncontrado)

numeros.splice(numeroEncontrado, 1)
console.log(numeros)