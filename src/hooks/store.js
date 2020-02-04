import globalHook from 'use-global-hook';
import Immutable from 'seamless-immutable';


const initialState = Immutable({
    selectedImage: 0,
    selectedSource: 'https://imgurl.argumenti.ru/news/news_id/20190520091612-613831.jpg',
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
