import axios from "axios";
const API_URL = 'https://api-colombia.com/api/v1'

export const getColombiaInfo = async () => {
    const response = await axios.get(`${API_URL}/Country/Colombia`)
    return response.data;

}

export const getRegionescolombia = async () => {
    const response = await axios.get(`${API_URL}/Region`);
    return response.data;

}

export const getRegionColombia = async () => {
    const response = await axios.get(`${API_URL}/Region/${id}`);
    return response.data;

}