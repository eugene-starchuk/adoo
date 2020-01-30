// import PropTypes from 'prop-types';
// import classnames from 'classnames';
import PropTypes from 'prop-types';
import useGlobal from '../../../hooks/store';

const Item = (props) => {
    const { source, selectedIndex } = props;
    const [, actions] = useGlobal();
    const handleClick = () => {
        actions.setSelectedImage(selectedIndex);
        actions.setSelectedSource(source);
    };
    return (
        <div className='siski'>
            {/* <div className='imageContainer'>
                <img className='image' src={logo} alt='erorr' />
            </div>
            <div className='caption'>{caption}</div> */}
            <div
                role='presentation'
                className='siski'
                onClick={handleClick}
                index={selectedIndex}
            >
                <img
                    src={source}
                    alt='eror'
                    className='siskiImg'
                />
            </div>
        </div>
    );
};

Item.propTypes = {
    source: PropTypes.string,
    selectedIndex: PropTypes.number,
};

Item.defaultProps = {
    source: '',
    selectedIndex: 1,
};

export default Item;
