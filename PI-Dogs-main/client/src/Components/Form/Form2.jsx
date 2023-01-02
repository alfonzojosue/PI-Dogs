import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createDog, getTemperaments } from "../../store/actions";
import { Link} from "react-router-dom";
import "./index.css";

export default function CreateDog(props) {
  let dispatch = useDispatch();
  
  let i = 0;

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
    dispatch(getTemperaments());
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
        image:
          state.image !== ""
            ? state.image
            : "https://previews.123rf.com/images/red33/red331112/red33111200014/11546849-skizzieren-sie-doodle-crazy-verr%C3%BCckt-puppy-dog-vektor-illustration.jpg",
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
    // {
    //   <label>Se anadino {e.target.value}</label>;
    // }
    setState({
      ...state,
      temperaments: [...state.temperaments, e.target.value],
    });
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

  function deleteTemp(e) {
    e.preventDefault();

    setState({
      ...state,
      temperaments: state.temperaments.filter(
        (temp) => temp !== e.target.value
      ),
    });
    e.target.value = "";
  }

  return (
    <div className="createDog">
      <div className="create-dog-form">
        <h1>Create Doggo!</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={(e) => handleChange(e)}
          ></input>
          {errors.name && <p className="pop-up">{errors.name}</p>}

          <br />

          <label>Min Height</label>
          <br />
          <input
            type="text"
            name="min_height"
            value={state.min_height}
            onChange={(e) => handleChange(e)}
          ></input>
          {errors.min_height && <p className="pop-up">{errors.min_height}</p>}

          <br />

          <label> Max Height</label>
          <br />
          <input
            type="text"
            name="max_height"
            value={state.max_height}
            onChange={(e) => handleChange(e)}
          ></input>
          {errors.max_height && <p className="pop-up">{errors.max_height}</p>}

          <br />

          <label>Min Weight</label>
          <br />
          <input
            type="text"
            name="min_weight"
            value={state.min_weight}
            onChange={(e) => handleChange(e)}
          ></input>
          {errors.min_weight && <p className="pop-up">{errors.min_weight}</p>}

          <br />

          <label>Max Weight</label>
          <br />
          <input
            type="text"
            name="max_weight"
            value={state.max_weight}
            onChange={(e) => handleChange(e)}
          ></input>
          {errors.max_weight && <p className="pop-up">{errors.max_weight}</p>}

          <br />

          <label>Min Life Span</label>
          <br />
          <input
            type="text"
            name="min_life_span"
            value={state.min_life_span}
            onChange={(e) => handleChange(e)}
          ></input>
          {errors.min_life_span && (
            <p className="pop-up">{errors.min_life_span}</p>
          )}

          <br />

          <label>Max Life Span</label>
          <br />
          <input
            type="text"
            name="max_life_span"
            value={state.max_life_span}
            onChange={(e) => handleChange(e)}
          ></input>
          {errors.max_life_span && (
            <p className="pop-up">{errors.max_life_span}</p>
          )}

          <br />

          <label>Image</label>
          <br />
          <input
            type="text"
            name="image"
            value={state.image}
            onChange={(e) => handleChange(e)}
          ></input>
          <br />

          <br />

          <select onChange={(e) => addTemp(e)}>
            <option value="">Select Temperament</option>
            {/* <br /> */}
            {temperaments &&
              temperaments.map((temperament) => {
                return (
                  <option
                    temperament={temperament}
                    key={i++}
                    id={temperaments.indexOf(temperament)}
                    value={temperament}
                  >
                    {temperament}
                  </option>
                );
              })}
          </select>
          <br />
          <br />
          {/* <label>{state.temperaments && state.temperaments}</label> */}
          <select onChange={(e) => deleteTemp(e)}>
            <option value="">Select Temperament to Delete</option>
            {state.temperaments &&
              state.temperaments.map((temperament) => {
                return (
                  <option
                    temperament={temperament}
                    key={i++}
                    id={state.temperaments.indexOf(temperament)}
                    value={temperament}
                  >
                    {temperament}
                  </option>
                );
              })}
          </select>
          <br />
          <br />
          <input type="submit" value="Send" className="button"></input>
        </form>
        {/* <div className="delete_temperament">
          <label>Select Temperament to Delete</label>
          {state.temperaments &&
            state.temperaments.map((temperament) => {
              return <input type="checkbox">{temperament}</input>;
            })}
        </div> */}
        <br />
        <Link to="/home">
          <button className="button">Go Back</button>
        </Link>
      </div>
    </div>
  );
}