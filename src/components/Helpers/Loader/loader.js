// import PropTypes from 'prop-types';
// import classnames from 'classnames';
import { Fade } from '@material-ui/core';
import { useSelector } from 'react-redux';

const Loader = () => {
    const loading = useSelector((store) => store.viewReducer.loading);
    return (
        <Fade in={loading} timeout={{ exit: 800, enter: 400 }}>
            <div className='Loader'>
                <div className='loading_text'>Loading</div>
                <div className='dot1'>.</div>
                <div className='dot2'>.</div>
                <div className='dot3'>.</div>
            </div>
        </Fade>
    );
};

Loader.propTypes = {
    // visible: PropTypes.bool.isRequired,
    //
};

Loader.defaultProps = {};

export default Loader;
