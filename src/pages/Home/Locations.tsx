import { IoLocationSharp } from "react-icons/io5";
import { Location } from "../SearchbarApi";

export default function Locations({
  location,
  onLocationSelect,
}: {
  location: Location;
  onLocationSelect: (value: Location) => void;
}) {
  console.log(location);
  return (
    <div
      onClick={() => {
        onLocationSelect(location);
      }}
      role="button"
      className="w-full hover:bg-gray-200 border-b border-gray-300 "
    >
      <div className="w-full flex items-center gap-2 p-3 cursor-pointer ">
        <div className="w-[28px]!">
          <IoLocationSharp
            className="text-gray-500 w-[28px] h-[28px] "
            height={28}
            width={28}
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-[15px] font-semibold">{location.name}</h3>
          <p className="text-[12px] line-clamp-1">{location.label} </p>
        </div>
      </div>
    </div>
  );
}
