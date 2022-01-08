import { formatDate } from './utils/date'

const one = 1
const two = 2

export const sum: FnType<string> = (a, b) => `${a + b}`

console.log('log123:', one, two, sum(one, two))

console.log('date', formatDate())
