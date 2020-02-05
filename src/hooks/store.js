import globalHook from 'use-global-hook';
import Immutable from 'seamless-immutable';


const initialState = Immutable({
    selectedImage: 0,
    selectedSource: 'https://i.pinimg.com/originals/cc/11/66/cc11665c0f6565ab973907a73fa7d8b5.jpg',
});

const actions = {
    setSelectedImage: (store, value) => {
        store.setState({ selectedImage: value });
        console.log(value);
    },
    setSelectedSource: (store, value) => {
        store.setState({ selectedSource: value });
    },
};

const useGlobal = globalHook(React, initialState, actions);

export default useGlobal;
