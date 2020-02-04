// import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
// import React, { useState } from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Item from './Item/Item';
import useGlobal from '../../hooks/store';
// import img3 from '../../public/img/IMG_5006.jpg';
// import img4 from '../../public/img/IMG_5009.jpg';

import projects from '../../meta/projects';
// import classnames from 'classnames';

const Gallery = () => {
    // const projects = useSelector((store) => store.viewReducer.projects);
    const [store, actions] = useGlobal();
    // const [curImg, setCurImg] = useState();
    const backClick = () => {
        const project = _.find(projects, (_, i) => (i === store.selectedImage + 1));
        actions.setSelectedSource(project.source);
        actions.setSelectedImage(project.index);
    };
    const forwardClick = () => {
        const project = _.find(projects, (_, i) => (i === store.selectedImage - 1));
        actions.setSelectedSource(project.source);
        actions.setSelectedImage(project.index);
    };
    return (
        <div className='gallery'>
            <div className='viewer'>
                <div
                    role='presentation'
                    onClick={forwardClick}
                >
                    <ArrowBackIosIcon />
                </div>
                <div className='viewerImgContainer'>
                    <img
                        selectedIndex={store.selectedImage}
                        src={store.selectedSource}
                        alt='eror'
                        className='viewerImg'
                    />

                </div>
                <div
                    role='presentation'
                    onClick={backClick}
                >
                    <ArrowForwardIosIcon />
                </div>
            </div>
            <div className='itemsWindow'>
                {
                    _.map(projects, (project, i) => (
                        <Item
                            id={i}
                            index={i}
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
