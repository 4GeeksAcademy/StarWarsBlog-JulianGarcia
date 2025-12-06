// Import necessary hooks and functions from React.
import { useContext, useReducer, createContext } from "react";
import storeReducer, { initialStore } from "../store"  // Import the reducer and the initial state.

// Create a context to hold the global state of the application
// We will call this global state the "store" to avoid confusion while using local states
const StoreContext = createContext()

// Define a provider component that encapsulates the store and warps it in a context provider to 
// broadcast the information throught all the app pages and components.
export function StoreProvider({ children }) {
    // Initialize reducer with the initial state.
    const [store, dispatch] = useReducer(storeReducer, initialStore())
       const addFavorite = (item) => {
        dispatch({
            type: "add_favorite",
            payload: item
        });
    };
     const removeFavorite = (uid, type) => {
        dispatch({
            type: "remove_favorite",
            payload: { uid, type }
        });
    };
    // Provide the store and dispatch method to all child components.
    return <StoreContext.Provider value={{ store, dispatch, addFavorite, removeFavorite }}>
        {children}
    </StoreContext.Provider>
}

// Custom hook to access the global state and dispatch function.
export default function useGlobalReducer() {
    const { dispatch, store, addFavorite, removeFavorite } = useContext(StoreContext)
    return { dispatch, store, addFavorite, removeFavorite };
}