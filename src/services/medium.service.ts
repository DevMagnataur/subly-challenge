import { FETCH_ALL_MEDIUMS } from "../data/consts";
import AxiosInstance from "../utils/axios.utils";

export const getAll = async () => {
	const response = await AxiosInstance.get(FETCH_ALL_MEDIUMS);
	return response.data;
};