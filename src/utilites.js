const random = (from, to) => from + Math.round(Math.random() * to - from)

const pause = (time) => new Promise((resolve) => setTimeout(() => resolve(), time))

