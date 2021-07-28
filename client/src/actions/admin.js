import axios from "axios";
//export const HOUSES_ADDED_ADMIN = 'HOUSE_ADDED_ADMIN';

const config = {
    headers: {
      "Content-Type": "application/json"
    }
};


export const addNewHouse = async (houseData) => {
    const body = JSON.stringify(houseData);
    
    try {
        await axios.post("http://localhost:5000/api/admin/addHousePrize", body, config);
        
        console.log("SUCCESS. HOUSE ADDED");
    } catch (error) {
        console.log(error);
    }
}