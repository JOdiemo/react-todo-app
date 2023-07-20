import { useState } from 'react';

const Form = () => {
  const [state, setState] = useState({
    fname: '',
    lname: '',
    message: '',
    carBrand: '',
    isChecked: false,
    gender: '',
  });
  const carBrands = ['Mercedes', 'BMW', 'Maserati', 'Infinity', 'Audi'];

  /* eslint-disable react/no-array-index-key */
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleChange1 = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setState((state) => ({
      ...state,
      [e.target.name]: value,
    }));
  };

  const carBrandOptions = carBrands.map((carBrand, key) => (
    <option value={carBrand} key={key}>
      {carBrand}
    </option>
  ));
  return (
    <>
      <h1>React Form Handling</h1>
      <form>
        <label htmlFor="FirstName">
          First Name:
          <input name="fname" id="FirstName" type="text" value={state.fname} onChange={handleChange} />
        </label>
        <label htmlFor="LastName">
          First Name:
          <input name="lname" id="LastName" type="text" value={state.lname} onChange={handleChange} />
        </label>
        <label htmlFor="message">
          Your Message:
          <textarea
            name="message"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="carBrand">
          Car brand:
          <select
            name="carBrand"
            value={state.carBrand}
            onChange={handleChange}
          >
            <option value="" disabled>
              --Pick a car brand--
            </option>
            {carBrandOptions}
          </select>
        </label>
        <label htmlFor="isChecked">
          <input
            type="checkbox"
            name="isChecked"
            checked={state.isChecked}
            onChange={handleChange1}
          />
          Is Checked
        </label>
        <label htmlFor="gender">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={state.gender === 'male'}
            onChange={handleChange}
          />
          {' '}
          Male
        </label>
        <label htmlFor="gender">
          <input
            type="radio"
            name="gender"
            value="female"
            checked={state.gender === 'female'}
            onChange={handleChange}
          />
          {' '}
          Female
        </label>
      </form>
      <h5>
        Name:
        {state.fname}
        {state.lname}
      </h5>
      <p>
        Messege:
        {state.message}
      </p>
      <h5>
        Favorite car brand:
        {state.carBrand}
      </h5>
      <h5>
        Is it checked? :
        {state.isChecked ? 'Yes' : 'No'}
      </h5>
      <h5>
        Gender :
        {state.gender}
      </h5>
    </>
  );
};
export default Form;
