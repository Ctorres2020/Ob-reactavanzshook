import { useState } from "react";

const useList = (initialValue = []) => {
    const [value, setValue] = useState(initialValue);

    /// push new value to list
    const push = (element) => {
        setValue((oldValue) => [...oldValue, element])
    }

    // eliminar
    const remove = (index) => {
        setValue((oldValue) => oldValue.filter((_,i) => i !== index))
    }

    // verificar lista si esta vacia
    const isEmpty = () => value.length === 0

    // vaciar lista
    const clear = () => setValue([])

    // ordenar elementos con sort
    const sords = () => {setValue((oldValue) => [...oldValue].sort())}

    // invertir elementos con reverse
    const invert = () => {setValue((oldValue) => [...oldValue].reverse())}

    return{value, setValue, push, remove, isEmpty, clear, sords, invert}
}

export default useList