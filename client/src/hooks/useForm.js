// write your custom hook here to control your checkout form
import {useState, useEffect} from 'react'

export  const useForm = () => {
    const [values, setValues] = useState([])

    const handleChanges = e => {
        setValues([
          ...values, e.target.value
        ]);
      };

      return [values, handleChanges]
}