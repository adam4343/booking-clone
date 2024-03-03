import { Link, useSearchParams } from "react-router-dom";
import { TypeHotelCard } from "./TypeHotelCard";
import { differenceInDays, addDays } from "date-fns";

export default function HotelCard({ hotel }: { hotel: TypeHotelCard }) {
  const numberOfNights = differenceInDays(
    new Date(hotel.checkoutDate),
    new Date(hotel.checkinDate)
  );
  const [searchParams] = useSearchParams();

  function getParams() {
    const params = new URLSearchParams();
    const checkindate = searchParams.get("checkinDate");
    const newCheckin = checkindate || new Date().toISOString();
    params.set("checkinDate", newCheckin);
    const adults = searchParams.get("adults");
    const checkoutdate = searchParams.get("checkoutDate");
    params.set(
      "checkoutDate",
      checkoutdate || addDays(new Date(newCheckin), 1).toISOString()
    );
    params.set("adults", adults || "1");
    return params.toString();
  }

  return (
    <div>
      <img src={hotel.photoMainUrl} alt="hotel-image" />
      <div>
        <div>
          <h2>{hotel.name}</h2>
          <p>stars</p>
          <p>like icon</p>
        </div>
        {/* content */}
        <div>
          <div>{numberOfNights}</div>
          <div>
            {/* SALE PRICE  */}
            <div>
              <p>{hotel?.priceBreakdown?.strikethroughPrice?.currency}</p>
              <p>{hotel?.priceBreakdown?.strikethroughPrice?.value}</p>
            </div>
            {/* GROSS PRICE */}
            <div>
              <p>{hotel?.priceBreakdown?.grossPrice?.currency}</p>
              <p>{hotel?.priceBreakdown?.grossPrice?.value}</p>
            </div>
          </div>
        </div>
        <Link to={`/hotel/${hotel.id}?${getParams()}`}>See availability</Link>
      </div>
    </div>
  );
}
