import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { axiosPrivate } from "@/lib/axios";

export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  const { hotelId } = useParams();
  const [searchParams] = useSearchParams();

  const checkInDate = searchParams.get("checkinDate");
  const checkOutDate = searchParams.get("checkoutDate");
  const adults = searchParams.get("adults");
  async function getRooms() {
    try {
      const response = await axiosPrivate.get("/v1/hotels/room-list", {
        params: {
          checkout_date: new Date(checkOutDate ?? Date.now())
            .toISOString()
            .split("T")[0],
          locale: "en-gb",
          hotel_id: hotelId,
          checkin_date: new Date(checkInDate ?? Date.now())
            .toISOString()
            .split("T")[0],
          currency: "USD",
          adults_number_by_rooms: `${adults},1`,
          units: "metric",
          children_ages: undefined,
          children_number_by_rooms: undefined,
        },
      });
      setRooms(response.data);
    } catch (e) {
      console.error("Error", e);
    }
  }
  useEffect(() => {
    getRooms();
  }, []);
  console.log("hi", rooms);
  return <div>Rooms</div>;
}
