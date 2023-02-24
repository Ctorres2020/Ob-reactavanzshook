import React, { useEffect, useRef, useState } from 'react';

// useBoolean Hook
const useBoolean = (initialValue) => {
    const [value, setValue] = useState(initialValue)

    const updateValue = useRef({
        toggle: () => setValue(oldValue => !oldValue),
        on: () => setValue(true),
        off: () => setValue(false)
    })

    return [value, updateValue.current]
}

export const EmplouseBoolean = () => {
    const [lista, setLista] = useState([])
    
    // uso de hook
    const [cargando, setCargando] = useBoolean(false)
    const [error, setError] = useBoolean(false)

    // Al iniciar el componente, cargamos la lista
    useEffect(() => {
      setCargando.on()
      fetch('https://reqres.in/users')
        .then(response => {
          console.log(response.json())
        })
        .then(setLista)
        .catch((error) => {
          alert(`Ha ocurrido un error: ${error}`)
          setError.on()
        })
        .finally(() => setCargando.off())
    }, [lista, setCargando, setError])
    



  return (
    <div>
        <p>{cargando ? 'Cargando...' : null}</p>
        <p>{error ? 'Ha ocurrido un error' : null}</p>
    </div>
  )
}
