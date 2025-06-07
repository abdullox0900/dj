import axios from "axios";
import { parseStringPromise } from "xml2js";

export async function fetchXMLData(url: string) {
  try {
    const response = await axios.get(url);
    const data = await parseStringPromise(response.data);
    return data;
  } catch (error) {
    console.error("Ошибка при загрузке или преобразовании XML:", error);
    throw error;
  }
}
