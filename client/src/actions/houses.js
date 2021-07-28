import axios from 'axios';
export const HOUSES_LOADED = "HOUSES_LOADED";

export const loadHouses = async () => {
    
    try {
        const res = await axios.get('http://localhost:5000/api/prizes');
        return { type: HOUSES_LOADED, payload: res.data.prizes };
    } catch (error) {
        console.log(error)
    }
}
