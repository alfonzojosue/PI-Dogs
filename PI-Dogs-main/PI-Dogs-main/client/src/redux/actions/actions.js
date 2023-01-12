import axios from "axios";
export const GET_DOGS = "GET_DOGS";
export const GET_DOGS_BY_NAME = "GET_DOGS_BY_NAME";
export const GET_DOGS_BY_ID = "GET_DOGS_BY_ID";
export const REINICE = "REINICE";
export const GET_DOG_BY_TEMPERAMENTS = "GET_DOG_BY_TEMPERAMENTS";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS"
export const CREATE_DOG = "CREATE_DOG"
export const HANDLE_ALPHABETIC_CHANGE = "HANDLE_ALPHABETIC_CHANGE";
export const HANDLE_WEIGHT_CHANGE = "HANDLE_WEIGHT_CHANGE";
export const GET_DOG_DB_OR_API = "GET_DOG_DB_OR_API"
export const MENOR_LIFE_SPAN = "MENOR_LIFE_SPAN"


export const getDogs = () => {
 return function (dispatch) {
      fetch("http://localhost:3001/dogs")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: GET_DOGS,
          payload: data,
        });
      })
      .catch((err) => console.log(err));
 }
}

export const getDogByName = (name) => {
  return function (dispatch) {
    axios.get("dogs?name=" + name)
    .then((dog) => {
      dispatch({
        type: GET_DOGS_BY_NAME,
        payload: dog.data
      })
    })
  }
}

export const getDogById = (id) => {
  return async function(dispatch) {
   const dogs = await axios.get(`dogs/${id}`)
   dispatch({
    type: GET_DOGS_BY_ID,
    payload: dogs.data
   })
  }
}

export const getTemperament = () => {
 return async function  (dispatch) {
    const temperaments = await axios.get('temperament')
    dispatch({
      type: GET_TEMPERAMENTS,
      payload: temperaments.data
    })
  }
}

export const createDog = (dog) => {
  return async function(dispatch){
    const newdog = await axios.post("dogs", dog)
    dispatch({
      type: CREATE_DOG,
      payload: newdog.data,
    })
   
  }
 }


 export function handleAlphabeticChange(order) {
  return {
    type: HANDLE_ALPHABETIC_CHANGE,
    payload: order,
  };
}
 

export function handleWeightChange(order) {
  return {
    type: HANDLE_WEIGHT_CHANGE,
    payload: order,
  };
}

export function menorLifeSpan(order){
  return {
    type: MENOR_LIFE_SPAN,
    payload: order
  }
}

export function getDogByTemperaments(temperament) {
  return {
    type: GET_DOG_BY_TEMPERAMENTS,
    payload: temperament,
  }
}
export function reinice(){
  return {
    type: REINICE,
  }
}

export function getDogDbOrApi(order){
  return{
    type: GET_DOG_DB_OR_API,
    payload: order
  }
}