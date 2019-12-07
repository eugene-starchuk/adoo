import * as ActionTypes from '../../constants/actionTypes';

export const SELECT_MENU_ITEM = (index) => {
    return {
        type: ActionTypes.SELECT_MENU_ITEM,
        index,
    };
};

export const SHOW_LOADER = () => {
    return {
        type: ActionTypes.SHOW_LOADER,
    };
};

export const CLOSE_LOADER = () => {
    return {
        type: ActionTypes.CLOSE_LOADER,
    };
};

export const RECIEVE_PROJECTS = (projects) => {
    return {
        type: ActionTypes.RECIEVE_PROJECTS,
        projects,
    };
};
