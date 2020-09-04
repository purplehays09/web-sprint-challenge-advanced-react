// write your custom hook here to control your checkout form
import {useState, useEffect} from 'react'

export  const useForm = (initialValue) => {
    // const [values, setValues] = useState([])

    // const handleChanges = e => {
    //     setValues([
    //       ...values, e.target.value
    //     ]);
    //   };

      const [showSuccessMessage, setShowSuccessMessage] = useState(false);
      const [values, setValues] = useState(initialValue);
    
      const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
      };

      return [values, showSuccessMessage, handleChanges, handleSubmit]
}