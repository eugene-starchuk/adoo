// import PropTypes from 'prop-types';
// import classnames from 'classnames';
import PropTypes from 'prop-types';

const Item = ({ caption, logo }) => {
    return (
        <div className='item'>
            {/* <div className='imageContainer'>
                <img className='image' src={logo} alt='erorr' />
            </div>
            <div className='caption'>{caption}</div> */}
            <div className='caption'>{caption}</div>
            <div className='logo'>{logo}</div>
        </div>
    );
};

Item.propTypes = {
    caption: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
};

Item.defaultProps = {};

export default Item;
