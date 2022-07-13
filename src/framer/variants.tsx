export const leftVariant = {
    visible: {x: 0, opacity: 1, transition: {duration: 1.5}, rotate: 0},
    hidden: {x: -100, opacity: 0, rotate: 360}
}

export const rightVariant = {
    visible: {x: 0, opacity: 1, transition: {duration: 1.5}, rotate: 0},
    hidden: {x: +200, opacity: 0, rotate: 360}
}

export const topVariant = {
    visible: {y: 0, opacity: 1, transition: {duration: 1}},
    hidden: {y: -200, opacity: 0}
}

export const mainMobilePicVariant = {
    visible: {scale: 1, opacity: 1, transition: {duration: 1}},
    hidden: {scale: 2.2, opacity: 0}
}