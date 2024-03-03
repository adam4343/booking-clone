import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import HotelCard from "./HotelCard";
import { TypeHotelCard } from "./TypeHotelCard";
const API_KEY = import.meta.env.VITE_API_KEY;
const HOST_KEY = import.meta.env["VITE_X-RapidAPI-Host"];

const objects = [
  "location",
  "startDate",
  "endDate",
  "adults",
  "children",
  "rooms",
  "dest_type",
];

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const [allHotels, setHotels] = useState<TypeHotelCard[]>([]);

  useEffect(() => {
    async function getHotels() {
      const paramsValues = new Map();
      for (const key of objects) {
        paramsValues.set(key, searchParams.get(key));
      }
      const childrenNumber = paramsValues.get("children");
      try {
        const response = await axios.get(
          "https://booking-com.p.rapidapi.com/v2/hotels/search",
          {
            params: {
              currency: "USD",
              order_by: "popularity",
              dest_id: paramsValues.get("location"),
              dest_type: paramsValues.get("dest_type"),
              locale: "en-gb",
              checkin_date: paramsValues.get("startDate")?.split("T")[0],
              checkout_date: paramsValues.get("endDate")?.split("T")[0],
              units: "metric",
              filter_by_currency: "USD",
              adults_number: paramsValues.get("adults"),
              room_number: paramsValues.get("rooms"),
              page_number: "0",
              categories_filter_ids: "class::2,class::4,free_cancellation::1",
              include_adjacency: "true",
              children_number:
                childrenNumber && childrenNumber > 0
                  ? childrenNumber
                  : undefined,
              children_ages:
                childrenNumber && childrenNumber > 0 ? `1,0` : undefined,
            },
            headers: {
              "X-RapidAPI-Key": API_KEY,
              "X-RapidAPI-Host": HOST_KEY,
            },
          }
        );
        setHotels(response.data.results);
      } catch (e) {
        console.error("Error is", e);
      }
    }

    getHotels();
  }, [searchParams]);
  console.log(allHotels);

  return (
    <div>
      <section>
        {allHotels.map((hotel) => (
          <HotelCard hotel={hotel} key={hotel.id} />
        ))}
      </section>
    </div>
  );
}
