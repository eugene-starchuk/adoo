import { connect, useDispatch } from 'react-redux';
import { SELECT_MENU_ITEM, RECIEVE_PROJECTS } from '../../../../redux/actions/actions';
import GeneralApi from '../../../../api/general';

const NextButton = () => {
    const dispatch = useDispatch();
    return (
        <div
            className='containerNextButton'
        >
            <div
                role='presentation'
                className='nextButton'
                onClick={() => {
                    dispatch(SELECT_MENU_ITEM(2));
                    GeneralApi.getProjects((response) => {
                        console.log(response);
                        dispatch(RECIEVE_PROJECTS(response));
                    });
                }}
            >
                EXPLORE WORK
            </div>
        </div>
    );
};

function select(store) {
    return {
        selectedMenuIndex: store.viewReducer.selectedMenuIndex,
    };
}


export default connect(select)(NextButton);
