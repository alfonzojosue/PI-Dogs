import { 
  GET_DOGS,
  GET_DOGS_BY_ID,
  GET_TEMPERAMENTS,
  HANDLE_ALPHABETIC_CHANGE,
  GET_DOGS_BY_NAME,
  HANDLE_WEIGHT_CHANGE, 
  GET_DOG_BY_TEMPERAMENTS,
  REINICE,
  CREATE_DOG,
  GET_DOG_DB_OR_API
 } from "../actions/actions.js";

const initialState = {
  dogs: [],
  dogsDetail:[],
  temperaments: [],
  filterDog: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        dogs: action.payload,
      };
      case GET_DOGS_BY_ID: 
      return {
        ...state,
        dogsDetail: [action.payload],
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload
      };
      case GET_DOGS_BY_NAME: 
      return {
        ...state,
        filterDog: action.payload
      }
    case HANDLE_ALPHABETIC_CHANGE:
         let orderedAlphabetic = [...state.dogs].sort((a, b) => {
        if (a.name < b.name) {
          return action.payload === "abc" ? -1 : 1;
        }
        if (a.name > b.name) {
          return action.payload === "abc" ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        filterDog: [...orderedAlphabetic],
      };
      case HANDLE_WEIGHT_CHANGE:
        const sortedWeight = [...state.dogs] 

        if(action.payload === "-/+"){
           sortedWeight.sort((a,b) =>  
           parseInt(a.weight.imperial? a.weight.imperial.split('-')[0] : a.weight.split('-')[0]) -  parseInt(b.weight.imperial? b.weight.imperial.split('-')[0] : b.weight.split('-')[0]))
        }
        if(action.payload === "+/-"){
           sortedWeight.sort((a,b) =>  
           parseInt(b.weight.imperial? b.weight.imperial.split('-')[0] : b.weight.split('-')[0]) -  parseInt(a.weight.imperial? a.weight.imperial.split('-')[0] : a.weight.split('-')[0]))
        }
          return {
                ...state,
                filterDog: [...sortedWeight],
            };

    case GET_DOG_BY_TEMPERAMENTS:
            const temperament = action.payload

             let auxDogs = state.dogs.filter((e) => e.temperament && e.temperament.includes(temperament)
      );
            
          return {
          ...state,
          filterDog: [...auxDogs]
          };

      case REINICE: 
      const data = [...state.dogs]
      return {
        ...state,
        filterDog: [...data]
      };
       case CREATE_DOG:
      return {
        ...state,
      };
      case GET_DOG_DB_OR_API: 
      const dbOrApi = [...state.dogs]
      if(action.payload === "db"){
       let array = dbOrApi.filter(e => typeof e.id !== "number")
       return{
        ...state,
        filterDog : [...array]
       }
      }
      if(action.payload === "api") {
       let array = dbOrApi.filter(e => typeof e.id === "number")
       return{
        ...state,
        filterDog: [...array]
       }
      }
      return{
        ...state
      }
     
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;