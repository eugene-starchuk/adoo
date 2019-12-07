import { useSelector } from 'react-redux';

import Item from './Item/Item';
// import ProjectMeta from '../../meta/projects';
// import PropTypes from 'prop-types';
// import classnames from 'classnames';

const Gallery = () => {
    const projects = useSelector((store) => store.viewReducer.projects);
    return (
        <div className='gallery'>
            {
                _.map(projects, (project, i) => (
                    <Item
                        key={i}
                        caption={project.name}
                        logo={project.image}
                    />
                ))
            }
        </div>
    );
};

Gallery.propTypes = {
    // logo: propTypes.logo.isRequired,
};

Gallery.defaultProps = {};

export default Gallery;
