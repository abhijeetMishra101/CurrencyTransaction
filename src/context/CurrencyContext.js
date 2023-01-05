import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer"

const currencyReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
}


const getCurrenciesPairs = dispatch => {
    return async () => {
      const response = await jsonServer.get('/currency/pair?source_currency=AUD,HKD,MYR,SGD,USD,EUR,INR,GBP,CAD');
    console.log(JSON.parse(response.data))
    }
}

export const { Context: CurrencyContext, Provider } = createDataContext(currencyReducer, { getCurrenciesPairs }, {})