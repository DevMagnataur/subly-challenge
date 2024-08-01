import { FETCH_ALL_MEDIUMS } from "../data/consts";
import AxiosInstance from "../utils/axios.utils";

export const getAllMediums = async () => {
	const response = await AxiosInstance.get(FETCH_ALL_MEDIUMS);
	return response.data;
};