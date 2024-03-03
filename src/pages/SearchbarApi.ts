import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const HOST_KEY = import.meta.env["VITE_X-RapidAPI-Host"];
export type Location = {
  city_ufi: number;
  nr_hotels: number;
  lc: string;
  cc1: string;
  longitude: number;
  latitude: number;
  image_url: string;
  timezone: string;
  b_max_los_data: BMaxLosData;
  roundtrip: string;
  city_name: string;
  country: string;
  dest_type: string;
  rtl: number;
  hotels: number;
  type: string;
  dest_id: string;
  region: string;
  label: string;
  name: string;
};

export interface BMaxLosData {
  is_fullon: number;
  experiment: string;
  extended_los: number;
  default_los: number;
  max_allowed_los: number;
  has_extended_los: number;
}

export async function loadLocaitons(searchTerm: string) {
  try {
    const response = await axios.get(
      "https://booking-com.p.rapidapi.com/v1/hotels/locations",
      {
        params: {
          locale: "en-gb",
          name: searchTerm,
        },
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": HOST_KEY,
        },
      }
    );

    return response.data;
  } catch (err) {
    console.error(`${err} error`);
    return [];
  }
}
