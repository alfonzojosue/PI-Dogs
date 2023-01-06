import React from 'react'
import style from './Form.module.css'
import perros from '../../imagen/pngwing.com.png'
import { useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { createDog, getTemperament } from '../../redux/actions/actions'



const Form = () => {
  const dispatch = useDispatch()
  let i = 0
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
      return alert("Error, missing data or some data is incorrect");
    } else if (
      state.name === errors ||
      state.min_height === "" ||
      state.max_height === "" ||
      state.min_weight === "" ||
      state.max_weight === "" ||
      state.min_life_span === "" ||
      state.max_life_span === ""
    ) {
      e.preventDefault();
      return alert("Error, missing data or some data is incorrect");
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
        life_span: `${state.min_life_span} - ${state.max_life_span} years`,
        img: state.image? state.image : 
        'https://www.soy502.com/sites/default/files/styles/full_node/public/2022/Feb/05/meme_perrito_cuando_no_quieres_dar_explicaciones_soy502_guatemala.jpg',
        temperament: [...state.temperaments],
      };
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
      alert("Successfull Created New Dogg");
     
    
    }
  }
function addTemp(e) {
   
    setState({
      ...state,
      temperaments : [...state.temperaments, e.target.value],
      temperamentsNumber: e.target.value,
      
  });
      
}
  function validate(input) {
    let expresion = /^(?![ .]+$)[a-zA-Z .]*$/gm;
    let errors = {};
    if (!input.name) {
      errors.name = "Name is missing";
    } else if (expresion.test(input.name) === false) {
      errors.name = "Name invalid";
    } else if (!input.min_weight) {
      errors.min_weight = "Min weight is missing";
    } else if (input.min_weight <= 0) {
      errors.min_weight = "weight cannot be negative or zero";
    } else if (!input.max_weight) {
      errors.max_weight = "Max weight is missing";
    } else if (input.max_weight <= 0) {
      errors.max_weight = "weight cannot be negative or zero";
    } else if (parseInt(input.min_weight) >= parseInt(input.max_weight)) {
      errors.max_weight = "Max weight can not be less";
    } else if (input.min_height === "") {
      errors.min_height = "Min height is missing";
    } else if (input.min_height <= 0) {
      errors.min_height = "Height can not be less";
    } else if (!input.max_height) {
      errors.max_height = "Max height is missing";
    } else if (input.max_height <= 0) {
      errors.max_height = "height cannot be negative or zero";
    } else if (parseInt(input.min_height) >= parseInt(input.max_height)) {
      errors.max_height = "Max height can not be less";
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
        {errors.name && <p className={style.error}>{errors.name}</p>}
        <div>
        <p className={style.text}>Weight</p>
        <label htmlFor="" className={style.min}>Min</label>
        <input type="text" className={style.inputMin} name="min_weight" value={state.min_weight} onChange={(e) => handleChange(e)} />
        <label htmlFor="" className={style.max}>Max</label>
        <input type="text" className={style.inputMin} name="max_weight" value={state.max_weight} onChange={(e) => handleChange(e)}/>
         {errors.min_weight?  <p className={style.error}>{errors.min_weight}</p> : ''}
        {errors.max_weight? <p className={style.error}>{errors.max_weight}</p> : ''}
        </div>
        <div>
        <p className={style.text}>Height</p>
        <label htmlFor="" className={style.min}>Min</label>
        <input type="text" className={style.inputMin} name="min_height" value={state.min_height} onChange={(e) => handleChange(e)} />
        <label htmlFor="" className={style.max}>Max</label>
        <input type="text" className={style.inputMin} name="max_height" value={state.max_height} onChange={(e) => handleChange(e)}  />
        {errors.min_height?  <p className={style.error}>{errors.min_height}</p> : ''}
        {errors.max_height? <p className={style.error}>{errors.max_height}</p> : ''}
        </div>
        <div>
        <p className={style.text}>Life Span</p>
        <label htmlFor="" className={style.min}>Min</label>
        <input type="text" className={style.inputMin} name="min_life_span" value={state.min_life_span} onChange={(e) => handleChange(e)} />
        <label htmlFor="" className={style.max}>Max</label>
        <input type="text" className={style.inputMin} name="max_life_span" value={state.max_life_span} onChange={(e) => handleChange(e)}  />
        {errors.min_life_span?  (<p className={style.error}>{errors.min_life_span}</p>): ''}
        {errors.max_life_span? (<p className={style.error}>{errors.max_life_span}</p>) : ''}
        </div>
        <label htmlFor="">Imagen</label>
        <input type="url"  name="image" value={state.image} onChange={(e) => handleChange(e)}/>
        <label htmlFor="">Temperaments</label>
        <select name="" id="" className={style.selectTemperaments} onChange={(e) => addTemp(e)}>
            <option value="">Select Temperament</option>
            {temperaments.map((e) => {
                return (
                  <option
                    name={e.name}
                    key={e.id}
                    value={e.name}
                  >
                    {e.name}
                  </option>
                );
              })}
        </select>
          <div className={style.temperaments}>
          {state.temperaments.map(e => (
            <p key={i++} className={style.temperamentsP}>{e}</p>
          ))}
          </div>
        <button className={style.buttonCreate}>Create Dog</button>
        </form>
       
        
    </div>
  )
}

export default Form