import axios from "axios";
import qs from "querystring";

const MTG_ENDPOINT = "https://api.magicthegathering.io/v1";

export class Client {
  async getCards(params) {
    const result = await this._get("/cards", {
      params
    });

    return result.data.cards;
  }

  async getCard(id) {
    const result = await this._get(`/cards/${id}`);
    return result.data.card;
  }

  async getSets(params) {
    const result = await this._get("/sets", {
      params
    });

    return result.data.sets;
  }

  async getSet(id) {
    const result = await this._get(`sets/${id}`);

    return result.data.set;
  }

  async getTypes() {
    const result = await this._get("types");

    return result.data.types;
  }

  async getSubtypes() {
    const result = await this._get("subtypes");

    return result.data.subtypes;
  }

  async getSupertypes() {
    const result = await this._get("supertypes");

    return result.data.supertypes;
  }

  async getFormats() {
    const result = await this._get("formats");

    return result.data.formats;
  }

  _get(path, params) {
    return axios.get(`${MTG_ENDPOINT}/${path}`, {
      params
    });
  }
}
