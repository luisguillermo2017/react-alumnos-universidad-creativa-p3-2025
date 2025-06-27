import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    estadoConsultaApi : false

};

const spinnerSlice = createSlice(
    {
        name : 'datosParaReduxSpinner',
        initialState,
        reducers : {
            setEstadoConsultaApiActivo : (state) => {
                state.estadoConsultaApi = true;
            },
            setEstadoConsultaApiInactivo : (state) => {
                state.estadoConsultaApi = false;
            },
        }
    }
);

export const { setEstadoConsultaApiActivo, setEstadoConsultaApiInactivo  } = spinnerSlice.actions;
export default spinnerSlice.reducer;
