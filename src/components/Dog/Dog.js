import React from 'react';
import {DELETE} from "../../reducers";

export const Dog = ({dog, dispatch}) => {
    const dogDelete = () => {
      dispatch({type: DELETE, payload: {id:dog.id}})
    }
    return (
        <div>
            {dog.id} - {dog.name}
            <button onClick={dogDelete}>DELETE</button>
        </div>
    );
};

