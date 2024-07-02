const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            peopleDetails: null,
            people: null, 
            favorites: []
        },
        actions: {
            addFavorite: (favorite) => {
                const store = getStore();
                const newFavorites = [...store.favorites, favorite];
                setStore({ favorites: newFavorites });
            },
            
            removeFavorite: (uid) => {
                const store = getStore();
                const newFavorites = store.favorites.filter(favorite => favorite.uid !== uid);
                setStore({ favorites: newFavorites });
            },

            getPeople: async () => {
                try {
                    const resp = await fetch('https://www.swapi.tech/api/people');
                    if (!resp.ok) throw new Error('Error fetching people')
                    const data = await resp.json();
                    setStore({people: data.results})
                } catch (error) {
                    console.log(error);
                }
            },

            getPeopleDetails: async (uid) => {
                try {
                    const resp = await fetch('https://www.swapi.tech/api/people/'+uid);
                    if (!resp.ok) throw new Error('Error fetching people')
                    const data = await resp.json();
                    setStore({peopleDetails: data.result})
                } catch (error) {
                    console.log(error);
                }
            }
        }
    };
};

export default getState;
