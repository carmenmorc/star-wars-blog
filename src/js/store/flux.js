const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
			people: [],
			vehicles: [],
			planets: [],
			peopleDetails: null,
			vehicleDetails: null,
			planetDetails: null,
			favorites: []
		},
        actions: {
            getPeople: async () => {
                try {
                    const resp = await fetch('https://www.swapi.tech/api/people');
                    if (!resp.ok) throw new Error('Error fetching people');
                    const data = await resp.json();
                    setStore({ people: data.results });
                } catch (error) {
                    console.log(error);
                }
            },
            getVehicles: async () => {
                try {
                    const resp = await fetch('https://www.swapi.tech/api/vehicles');
                    if (!resp.ok) throw new Error('Error fetching vehicles');
                    const data = await resp.json();
                    setStore({ vehicles: data.results });
                } catch (error) {
                    console.log(error);
                }
            },
            getPlanets: async () => {
                try {
                    const resp = await fetch('https://www.swapi.tech/api/planets');
                    if (!resp.ok) throw new Error('Error fetching planets');
                    const data = await resp.json();
                    setStore({ planets: data.results });
                } catch (error) {
                    console.log(error);
                }
            },
            getPeopleDetails: async (uid) => {
				try {
					const resp = await fetch('https://www.swapi.tech/api/people/'+uid);
					console.log(resp)
					if (!resp.ok) throw new Error('Error fetching people')
					const data = await resp.json();
					console.log(data)
					setStore({peopleDetails: data.result})
				} catch (error) {
					console.log(error);
				}
			},
            getVehiclesDetails: async (uid) => {
				try {
					const resp = await fetch('https://www.swapi.tech/api/vehicles/'+uid);
                    console.log(resp)
					if (!resp.ok) throw new Error('Error fetching vehicle');
					const data = await resp.json();
                    console.log(data)
					setStore({vehiclesDetails: data.result});
				} catch (error) {
					console.log(error);
				}
			},
			getPlanetsDetails: async (uid) => {
				try {
					const resp = await fetch('https://www.swapi.tech/api/planets/'+uid);
                    console.log(resp)
					if (!resp.ok) throw new Error('Error fetching planet');
					const data = await resp.json();
                    console.log(data)
					setStore({planetsDetails: data.result});
				} catch (error) {
					console.log(error);
				}
			},
            addFavorite: (item) => {
                const store = getStore();
                setStore({ favorites: [...store.favorites, item] });
            },
            removeFavorite: (uid) => {
                const store = getStore();
                setStore({ favorites: store.favorites.filter(fav => fav.uid !== uid) });
            }
        }
    };
};

export default getState;
