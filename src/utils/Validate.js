import { useCallback, useState } from 'react';

function validate() {
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [touchedFields, setTouchedFields] = useState({});
  function handleChange(e) {
    const { target } = e;
    const { name } = target;
    if (name === 'email' && target.validity.patternMismatch) {
      target.setCustomValidity('Введите корректный e-mail');
    } if (name === 'name' && target.validity.patternMismatch) {
      target.setCustomValidity('Используйту буквы, пробелы и дефис');
    }
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());

    target.setCustomValidity('');
  }
  const handleSubmit = useCallback((e) => {
    const { name } = e.target.querySelector('input');
    if (e.target.querySelector('input').validity.valueMissing) {
      e.target.querySelector('input').setCustomValidity('Нужно ввести ключевое слово');
      setIsValid(false);
    }
    const errorMessage = e.target.querySelector('input').validationMessage;
    setErrors({ ...errors, [name]: errorMessage });
  });
  function handleBlur(e) {
    if (e.target.name === 'name' || e.target.name === 'email' || e.target.name === 'password') {
      setTouchedFields({ ...touchedFields, [e.target.name]: true });
    }
  }
  return {
    errors, isValid, handleChange, handleBlur, touchedFields, handleSubmit,
  };
}

export default validate;
