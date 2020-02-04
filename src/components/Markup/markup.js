import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
// import backgraundSrc from '../../public/img/background.jpg';
import '../../sass/main.sass';
import {
    // Zoom,
    // Grow,
    Fade,
} from '@material-ui/core';
import CloudsBack from '../../public/img/CloudsBack.png';
import InfoBar from './InfoBar/infoBar';
import Header from './Header';
import CloudsFront from './CloudsFront';
import About from './About/about';
import Home from './Home/home';
import Gallery from '../Gallery/gallery';


const Markup = ({ index }) => {
    const loading = useSelector((store) => store.viewReducer.loading);
    return (
        <Fade in={!loading} timeout={{ enter: 800, exit: 400 }}>
            <div className='MarkupStyle'>
                {index === 0 && <img className='сloudsBackStyle' src={CloudsBack} alt='eror' />}
                {/* <img className='backgroundStyle' src={backgraundSrc} alt='eror' /> */}
                <img
                    className='backgroundStyle'
                    src='https://qq1ncq.db.files.1drv.com/y4mYBkmV19G7ZHeNCR2uuaL5vkDR5A7yIY8v00orZ1MuVuehkISK931Vhuxb1oihSzhxKEjz1bQ1zAEzdcOFBgH_5c6L6vPm-bZWYipNMoKQxS9b_HsKiJVDi5RDQPU9qab8XoLQ8focZvCad0qRYQJunsKqlWpkHQwyja-x1UxzTyuv4GRoWTKNvHgH24W2COSQCG9bQn5JA0wI4oJDtVbVg?width=6555&height=4372&cropmode=none'
                    alt='eror'
                />
                {index === 0 && <CloudsFront />}
                <InfoBar />
                <div className='content'>
                    <Header />
                    {index === 0 && <Home />}
                    {index === 1 && <About />}
                    {index === 2 && <Gallery />}
                </div>
            </div>
        </Fade>
    );
};

Markup.propTypes = {
    index: PropTypes.number.isRequired,
};

Markup.defaultProps = {
};


function select(store) {
    return {
        index: store.viewReducer.selectedMenuIndex,
    };
}

export default connect(select)(Markup);
