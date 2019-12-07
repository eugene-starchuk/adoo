import { useEffect } from 'react';
import {
    connect,
    useDispatch,
} from 'react-redux';
// import PropTypes from 'prop-types';
// import backgraundSrc from '../public/img/background.jpg';
import '../sass/main.sass';
import Markup from './Markup/markup';
import Loader from './Helpers/Loader/loader';
import { CLOSE_LOADER } from '../redux/actions/actions';


const App = () => {
    const dispatch = useDispatch();
    const matcher = window.matchMedia('(prefers-color-scheme: dark)');

    const onMediaUpdate = () => {
        const lightSchemeIcon = document.querySelector('link#light-scheme-icon');
        const darkSchemeIcon = document.querySelector('link#dark-scheme-icon');

        if (matcher.matches) {
            lightSchemeIcon.remove();
            document.head.append(darkSchemeIcon);
        } else {
            document.head.append(lightSchemeIcon);
            darkSchemeIcon.remove();
        }
    };

    const didMount = () => {
        console.log('mounted');
        onMediaUpdate();
        window.onload = () => {
            console.log('all is loaded!');
            matcher.addListener(onMediaUpdate);
            dispatch(CLOSE_LOADER());
        };
    };

    useEffect(didMount, []);

    return (
        <>
            <Loader />
            <Markup />
        </>
    );
};

App.propTypes = {
    // loading: PropTypes.bool.isRequired,
};

function select(store) {
    return {
        loading: store.viewReducer.loading,
    };
}

export default connect(select)(App);
