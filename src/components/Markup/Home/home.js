import MainLogo from './MainLogo';
import NextButton from './NextButton';

// import PropTypes from 'prop-types';
// import classnames from 'classnames';

const Home = () => {
    return (
        <div className='home'>
            <MainLogo />
            <NextButton />
        </div>
    );
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
