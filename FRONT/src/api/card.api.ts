import getInstance from ".";
import { CardModel } from "../models/card.model";

export class CardApi {
  static async create(body: CardModel) {
    const axiosInstance = getInstance()
    const { data } = await axiosInstance.post('/cards', body);
    return data;
  }

  static async fetch() {
    const axiosInstance = getInstance()
    const { data } = await axiosInstance.get('/cards');
    return data;
  }

  static async deleteById(id: string) {
    const axiosInstance = getInstance()
    const { data } = await axiosInstance.delete(`cards/${id}`);
    return data;
  }

  static async updateById(id: string, body: CardModel) {
    const axiosInstance = getInstance()
    const { data } = await axiosInstance.patch(`/cards/${id}`, body);
    return data;
  }
}
