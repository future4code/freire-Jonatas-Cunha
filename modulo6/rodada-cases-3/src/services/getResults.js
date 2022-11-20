import axios from 'axios';
import { BASE_URL } from '../constants/BASE_URL';

export const getResults = async (searchTerm, setLoader, setResult, setError) => {
    setLoader(true);
    setError(false);

    await axios.get(`${BASE_URL}/${searchTerm}/latest`)
        .then((response) => {
            setResult(response.data);
           
        })
        .catch((error) => {
            setError(true);
        }
    );

    setLoader(false);

};