import globalHook from 'use-global-hook';
import Immutable from 'seamless-immutable';


const initialState = Immutable({
    selectedImage: 1,
    selectedSource: '',
});

const actions = {
    setSelectedImage: (store, value) => {
        store.setState({ selectedImage: value });
        console.log(value);
    },
    setSelectedSource: (store, value) => {
        store.setState({ selectedSource: value });
        console.log(value);
    },
};

const useGlobal = globalHook(React, initialState, actions);

export default useGlobal;
