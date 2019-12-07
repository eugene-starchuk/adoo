// const src = 'https://firebasestorage.googleapis.com/v0/b/adooone-52c8a.appspot.com/o/adooone-dark.png?alt=media&token=9711c942-e857-4a17-a4cf-2a03ddb5c705';
import { connect, useDispatch } from 'react-redux';
import { SELECT_MENU_ITEM } from '../../../../../redux/actions/actions';


const Logo = () => {
    const dispatch = useDispatch();
    return (
        // <div className='logo'>
        <div
            role='presentation'
            className='logo'
            onClick={() => dispatch(SELECT_MENU_ITEM(0))}
        >

            <div className='logooo'>
                <div className='o_dark o20' />
                <div className='o_dark o50' />
                <div className='o_dark o100' />
            </div>
            {/* <img className='logo_img' src={src} alt='logo' /> */}
            <div className='logo_text'>Adooone</div>
        </div>
    );
};


function select(store) {
    return {
        selectedMenuIndex: store.viewReducer.selectedMenuIndex,
    };
}


export default connect(select)(Logo);
