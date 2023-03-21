import { createContext, useReducer } from 'react';

const DUMMY_DATA = [
    {
      id: 'e1',
      name: 'Arnab',
      number: 8967764647,
      lat:82.04,
      lng:-71.05,
      email:'user@abc.com'
    }
    
  ];
  export const DataContext = createContext({
    data: [],
    addData: ({
    name,
    number,
    lat,
    lng,
    email
    }) => {},
  });
  
  function dataReducer(state, action) {
    switch (action.type) {
      case 'ADD':
        const id = new Date().toString() + Math.random().toString();
        return [{ ...action.payload, id: id }, ...state];
        default:
      return state;
  }
}

  function DataContextProvider({ children }) {
    const [datasState, dispatch] = useReducer(dataReducer, DUMMY_DATA);

    function addData(MechanicData) {
        dispatch({ type: 'ADD', payload: MechanicData });
      }

      const value = {
        data: datasState,
        addData: addData,
      };

    return (
    <DataContext.Provider value={value}>{children}</DataContext.Provider>
    );
}

export default DataContextProvider;
