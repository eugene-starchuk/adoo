/* eslint-disable quote-props */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SELECT_MENU_ITEM } from '../../../../../../redux/actions/actions';

class MenuItem extends Component {
    handleClick = () => {
        const { index, dispatch } = this.props;
        const action = SELECT_MENU_ITEM(index);
        console.log(action);
        dispatch(action);
    }

    render() {
        const { name, index, selectedMenuIndex } = this.props;
        const selected = index === selectedMenuIndex;
        return (
            <div
                role='presentation'
                className={classnames('menu_item', { 'active': selected })}
                onClick={this.handleClick}
            >
                {name}
            </div>
        );
    }
}

MenuItem.propTypes = {
    name: PropTypes.string,
    index: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    selectedMenuIndex: PropTypes.number.isRequired,
};

MenuItem.defaultProps = {
    name: 'item',
};

function select(store) {
    return {
        selectedMenuIndex: store.viewReducer.selectedMenuIndex,
    };
}

export default connect(select)(MenuItem);

// import PropTypes from 'prop-types';
// import '../../../../../css/index.css';


// const MenuItem = (props) => {
//     const { name } = props;
//     return (
//         <div className='menu_item'>
//             {name}
//         </div>
//     );
// };

// MenuItem.propTypes = {
//     name: PropTypes.string,
// };

// MenuItem.defaultProps = {
//     name: 'item',
// };

// export default MenuItem;
