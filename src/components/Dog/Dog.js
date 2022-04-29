import React from 'react';
import {useDispatch} from "react-redux";
import {dogAction} from "../../redux";

export const Dog = ({dog}) => {
    const {id,name} = dog
    const dispatch = useDispatch();
    const deleteById = () => {
      dispatch(dogAction.deleteDog({id}))
    }
    const setForUpdate = () => {
      dispatch(dogAction.setDog({dog}))
    }
    return (
        <div>
            {id} - {name}
            <button onClick={deleteById}>delete</button>
            <button onClick={setForUpdate}>update</button>
        </div>
    );
};

