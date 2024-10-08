
export const slideUp = (delay) =>{
    return {
        initial: {
            y: 60,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                delay: delay,
            }
        }
    }
}

export const slideBottom = (delay) =>{
    return {
        initial: {
            y: -60,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                delay: delay,
            }
        }
    }
}