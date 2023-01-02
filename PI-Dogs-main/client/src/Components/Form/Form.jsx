import React from 'react'
import style from './Form.module.css'
import perros from '../../imagen/pngwing.com.png'
import { useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { createDog, getTemperament } from '../../redux/actions/actions'

const Form = ({data}) => {
  const dispatch = useDispatch()

  const [state, setState] = useState({
    name: "",
    min_height: "",
    max_height: "",
    min_weight: "",
    max_weight: "",
    min_life_span: "",
    max_life_span: "",
    image: "",
    temperaments: [],
  });

  const [errors, setErrors] = useState({});
  let temperaments = useSelector((state) => state.temperaments);

  useEffect(() => {
    dispatch(getTemperament());
  }, [dispatch]);

   function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...state,
        [e.target.name]: e.target.value,
      })
    );
  }
   function handleSubmit(e) {
    if (
      errors.name !== undefined ||
      errors.min_height !== undefined ||
      errors.max_height !== undefined ||
      errors.min_weight !== undefined ||
      errors.max_weight !== undefined ||
      errors.min_life_span !== undefined ||
      errors.max_life_span !== undefined
    ) {
      e.preventDefault();
      return alert("Sorry, all fields are required except image");
    } else if (
      state.name === "" ||
      state.min_height === "" ||
      state.max_height === "" ||
      state.min_weight === "" ||
      state.max_weight === "" ||
      state.min_life_span === "" ||
      state.max_life_span === ""
    ) {
      e.preventDefault();
      return alert("Sorry, all fields are required except image");
    } else if (
      isNaN(parseInt(state.min_height)) ||
      isNaN(parseInt(state.max_height)) ||
      isNaN(parseInt(state.min_weight)) ||
      isNaN(parseInt(state.max_weight)) ||
      isNaN(parseInt(state.min_life_span)) ||
      isNaN(parseInt(state.max_life_span))
    ) {
      e.preventDefault();

      return alert("Sorry, please fill out the required fields correctly");
    } else {
      const dog = {
        name: state.name,
        height: `${state.min_height} - ${state.max_height}`,
        weight: `${state.min_weight} - ${state.max_weight}`,
        life_span: `${state.min_life_span} - ${state.max_life_span}`,
        image: state.image,
        temperament: [...state.temperaments],
      };
      console.log(dog);
      setState({
        name: "",
        min_height: "",
        max_height: "",
        min_weight: "",
        max_weight: "",
        min_life_span: "",
        max_life_span: "",
        image: "",
        temperaments: [],
      });
      dispatch(createDog(dog));
      alert("Successfully Created New Doggi :D");
    
    }
  }

  function addTemp(e) {
    setState({
      ...state,
      temperaments : [...state.temperaments, e.target.value],
      });
    console.log(state.temperaments)
  }

  function validate(input) {
    let expresion = /^(?![ .]+$)[a-zA-Z .]*$/gm;
    let errors = {};
    if (!input.name) {
      errors.name = "Name is missing";
    } else if (expresion.test(input.name) === false) {
      errors.name = "Name invalid";
    } else if (!input.min_height) {
      errors.min_height = "Min height is missing";
    } else if (input.min_height <= 0) {
      errors.min_height = "height cannot be negative or zero";
    } else if (!input.max_height) {
      errors.max_height = "Max height is missing";
    } else if (input.max_height <= 0) {
      errors.max_height = "height cannot be negative or zero";
    } else if (parseInt(input.min_height) >= parseInt(input.max_height)) {
      errors.max_height = "Max height can not be less";
    } else if (!input.min_weight) {
      errors.min_weight = "Min weight is missing";
    } else if (input.min_weight <= 0) {
      errors.min_weight = "Weight can not be less";
    } else if (!input.max_weight) {
      errors.max_weight = "Max weight is missing";
    } else if (input.max_weight <= 0) {
      errors.max_weight = "Weight cannot be negative or zero";
    } else if (parseInt(input.min_weight) >= parseInt(input.max_weight)) {
      errors.max_weight = "Max weight can not be less";
    } else if (!input.min_life_span) {
      errors.min_life_span = "Min life is missing";
    } else if (input.min_life_span <= 0) {
      errors.min_life_span = "life years cannot be negative or zero";
    } else if (!input.max_life_span) {
      errors.max_life_span = "Max life is missing";
    } else if (input.max_life_span <= 0) {
      errors.max_life_span = "life years cannot be negative or zero";
    } else if (parseInt(input.min_life_span) >= parseInt(input.max_life_span)) {
      errors.max_life_span = "Max life can not be less";
    }
    return errors;
  }
  return (
    <div className={style.container}>
        <div>
            <img src={perros} alt="img-perros" className={style.imgPerros} />
        </div>
        <form className={style.form}  onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" value={state.name} onChange={(e) => handleChange(e)}  />
        {errors.name && <p className="pop-up">{errors.name}</p>}
        <div>
        <p className={style.text}>Weight</p>
        <label htmlFor="" className={style.min}>Min</label>
        <input type="text" className={style.inputMin} name="min_weight" value={state.min_weight} onChange={(e) => handleChange(e)} />
        <label htmlFor="" className={style.max}>Max</label>
        <input type="text" className={style.inputMin} name="max_weight" value={state.max_weight} onChange={(e) => handleChange(e)}/>
        </div>
        <div>
        <p className={style.text}>Height</p>
        <label htmlFor="" className={style.min}>Min</label>
        <input type="text" className={style.inputMin} name="min_height" value={state.min_height} onChange={(e) => handleChange(e)} />
         {errors.min_height && <p className="pop-up">{errors.min_height}</p>}
        <label htmlFor="" className={style.max}>Max</label>
        <input type="text" className={style.inputMin} name="max_height" value={state.max_height} onChange={(e) => handleChange(e)}  />
        {errors.max_height && <p className="pop-up">{errors.max_height}</p>}
        </div>
        <div>
        <p className={style.text}>Life Span</p>
        <label htmlFor="" className={style.min}>Min</label>
        <input type="text" className={style.inputMin} name="min_life_span" value={state.min_life_span} onChange={(e) => handleChange(e)} />
          {errors.min_life_span && (<p className="pop-up">{errors.min_life_span}</p>)}
        <label htmlFor="" className={style.max}>Max</label>
        <input type="text" className={style.inputMin} name="max_life_span" value={state.max_life_span} onChange={(e) => handleChange(e)}  />
        {errors.max_life_span && (<p className="pop-up">{errors.max_life_span}</p>)}
        </div>
        <label htmlFor="">Imagen</label>
        <input type="text"  name="image" value={state.image} onChange={(e) => handleChange(e)}/>
        <label htmlFor="">Temperaments</label>
        <select name="" id="" className={style.selectTemperaments} onChange={(e) => addTemp(e)}>
            <option value="">Select Temperament</option>
            {/* <br /> */}
            {temperaments &&
              temperaments.map((e) => {
                return (
                  <option
                    e={e.name}
                    key={e.id}
                    value={e.id}
                  >
                    {e.name}
                  </option>
                );
              })}
        </select>


        <button className={style.buttonCreate}>Create Dog</button>
        </form>
        
    </div>
  )
}

export default Form