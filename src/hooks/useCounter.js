import { useState } from "react";

const useCounter = ({initialValue = 0, step=1, min=0, max=10}) => {
    const [value, setValue] = useState(initialValue);

    /// push new value to list
    const increment = () => {
        if (value < max && value >= min) {
            setValue(value + step)
        } else {
            alert(`solo se cuenta hasta ${max}`)
        }
    }

    // eliminar
    const decrement = () => {
        if (value !== min) {
            setValue(value - step)
        } else {
            alert(`solo se reduce hasta ${min}`)
        }
    }

    // vaciar lista
    const clear = () => setValue(0)



    return {count: value, increment, decrement, clear}
}

export default useCounter