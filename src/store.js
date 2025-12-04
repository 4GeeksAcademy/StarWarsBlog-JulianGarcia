export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    character: [],
    planets: [],
    vehiclestore: [],
    favorites: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };


    case "get_personajes":
      const { personajes } = action.payload
      console.log(personajes, "personaje");

      return {
        ...store, character: personajes
      }

    case "get_planets":
      const { planets } = action.payload
      console.log(planets, "planetas");

      return {
        ...store, planets: planets
      }

    case "get_vehicles":
      const { vehicles } = action.payload
      console.log(vehicles, "vehiculos");

      return {
        ...store, vehiclestore: vehicles
      }

    case "add_favorite":

      if (store.favorites.some(fav => fav.uid === action.payload.uid)) {
        return store;
      }
      return {
        ...store,
        favorites: [...store.favorites, action.payload]
      };

    case "remove_favorite":
      return {
        ...store,
        favorites: store.favorites.filter(fav => fav.uid !== action.payload.uid)
      };

    default:
      throw Error('Unknown action.');



  }
}
