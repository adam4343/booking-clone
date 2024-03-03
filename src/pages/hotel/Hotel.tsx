import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams, useParams } from "react-router-dom";
import Rooms from "./Rooms";
export default function Hotel() {
  const [searchParams] = useSearchParams();
  const params = useParams();
  const hotelId = params.hotelId;
  const checkinDate = searchParams.get("checkinDate");
  const checkoutDate = searchParams.get("checkoutDate");
  const [hotelInfo, setHotelInfo] = useState({});
  // create the type
  const API_KEY = import.meta.env.VITE_API_KEY;
  const HOST_KEY = import.meta.env["VITE_X-RapidAPI-Host"];
  async function loadHotelInfo() {
    try {
      const response = await axios.get(
        "https://booking-com.p.rapidapi.com/v2/hotels/details",
        {
          params: {
            currency: "USD",
            hotel_id: hotelId,
            checkin_date: new Date(checkinDate!).toISOString()?.split("T")[0],
            locale: "en-gb",
            checkout_date: new Date(checkoutDate!).toISOString()?.split("T")[0],
          },
          headers: {
            "X-RapidAPI-Key": API_KEY,
            "X-RapidAPI-Host": HOST_KEY,
          },
        }
      );
      setHotelInfo(response.data);
    } catch (e) {
      console.error("Error is", e);
    }
  }
  useEffect(() => {
    loadHotelInfo();
  }, []);
  return (
    <div>
      <h2></h2>
      <Rooms />
    </div>
  );
}
