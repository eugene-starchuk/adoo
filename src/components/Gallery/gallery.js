// import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Item from './Item/Item';
import useGlobal from '../../hooks/store';
import img from '../../public/img/IMG_4994.jpg';
// import img3 from '../../public/img/IMG_5006.jpg';
// import img4 from '../../public/img/IMG_5009.jpg';

import projects from '../../meta/projects';
// import classnames from 'classnames';

const Gallery = () => {
    // const projects = useSelector((store) => store.viewReducer.projects);
    const [store] = useGlobal();
    // const handleClick = () => {
    //     actions.setSelectedImage(selectedIndex);
    //     actions.setSelectedSource(source);
    // };
    return (
        <div className='gallery'>
            <div className='viewer'>
                <div>
                    <ArrowBackIosIcon />
                </div>
                <div className='BigSiski'>
                    <img
                        src={store.selectedSource}
                        alt='eror'
                        className='siskiImgV'
                    />
                </div>
                <div>
                    <ArrowForwardIosIcon />
                    {/* onClick={handleClick} */}
                </div>
            </div>
            <div className='itemsWindow'>
                {
                    _.map(projects, (project, i) => (
                        <Item
                            key={i}
                            source={project.source}
                        />
                    ))
                }
            </div>
        </div>
    );
};

Gallery.propTypes = {
    // logo: propTypes.logo.isRequired,
};

Gallery.defaultProps = {
};

export default Gallery;
