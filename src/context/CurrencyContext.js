import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer"

const currencyReducer = (state, action) => {
    switch (action.type) {
        // case CONSTANTS.ACTIONS.ADD_WORD:
        //     {
        //         const word = action.payload
        //         const addedWords = state[CONSTANTS.ADDED_WORDS_KEY] ? [...state[CONSTANTS.ADDED_WORDS_KEY], word] : [word]
        //         const addedWordMap = {}
        //         addedWordMap[CONSTANTS.ADDED_WORDS_KEY] = addedWords
        //         return { ...state, ...addedWordMap }
        //     }
        // case CONSTANTS.ACTIONS.SEGREGATE_WORDS:
        //     return performSegregation(state);
        // case CONSTANTS.ACTIONS.REMOVE_WORD:
        //     {
        //         const { text, id } = action.payload;
        //         const removedWordMap = {}
        //         removedWordMap[text.length] = state[text.length].filter(word => word.text != text && word.id != id)
        //         return {...state, ...removedWordMap}
        //     }
        // case CONSTANTS.ACTIONS.RESET_WORDS :
        //     {
        //         return {}
        //     }
        default:
            return state;
    }
}


const getCurrenciesPairs = dispatch => {
    return async () => {
      const response = await jsonServer.get('/currency/pair?source_currency=AUD,HKD,MYR,SGD,USD,EUR,INR,GBP,CAD');
    console.log(JSON.parse(response.data))
      //   dispatch({type: 'get_currency_pairs', payload: response.data})
    }
}

export const { Context: CurrencyContext, Provider } = createDataContext(currencyReducer, { getCurrenciesPairs }, {})