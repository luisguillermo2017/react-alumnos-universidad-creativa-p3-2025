import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    alumno : []

};

const alumnosSlice = createSlice(
    {
        name : 'datosAlumnoRedux',
        initialState,
        reducers : {
            setAlumno : (state, action) => {
                state.alumno = action.payload;
            },
        }
    }
);

export const { setAlumno } = alumnosSlice.actions;
export default alumnosSlice.reducer;
