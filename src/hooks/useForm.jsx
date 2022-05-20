import { useState } from 'react';

export default function useForm(inputs = {}) {
  const [formState, setFormState] = useState({ ...inputs });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log('name', { [name]: value });
    setFormState((prevState) => {
      //   console.log(prevState);
      const obj = { ...prevState, [name]: value };
      //   console.log(obj);
      return obj;
    });
  };
  return { formState, handleChange };
}
