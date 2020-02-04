// import PropTypes from 'prop-types';
// import classnames from 'classnames';
import PropTypes from 'prop-types';
import useGlobal from '../../../hooks/store';

const Item = (props) => {
    const { source, index } = props;
    const [, actions] = useGlobal();
    const handleClick = () => {
        actions.setSelectedImage(index);
        actions.setSelectedSource(source);
    };
    return (
        <div
            role='presentation'
            className='itemContainer'
            onClick={handleClick}
        >
            <img
                src={source}
                alt='eror'
                className='Img'
            />
        </div>
    );
};

Item.propTypes = {
    source: PropTypes.string,
    index: PropTypes.number,
};

Item.defaultProps = {
    source: '',
    index: 1,
};

export default Item;
