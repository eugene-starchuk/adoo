import axios from 'axios';

const getProjects = (cb) => {
    axios.get('/api/get_projects?')
        .then((response) => {
            cb(response.data.projects);
        });
};

const GeneralApi = {
    getProjects,
    //
};

export default GeneralApi;
