import { IoBedOutline } from "react-icons/io5";
import { loadLocaitons } from "../SearchbarApi";
import { useEffect, useState } from "react";
import Locations from "./Locations";
import { type Location } from "../SearchbarApi";
import { DatePickerWithRange } from "./DatePicker";
import { DropdownMenuRadioGroupDemo } from "./PeoplePicker";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { addDays } from "date-fns";
export default function Searchbar() {
  const navigate = useNavigate();
  const [locations, setLocations] = useState<Location[]>([]);
  const [form, setForm] = useState({
    location: "",
    typedLocation: "",
    dest_type: "",
    startDate: new Date().toISOString(),
    endDate: addDays(new Date(), 1).toISOString(),
    adults: 2,
    children: 0,
    rooms: 1,
  });

  const params = new URLSearchParams();

  function loadParams() {
    params.append("location", form.location);
    params.append("startDate", form.startDate);
    params.append("endDate", form.endDate);
    params.append("adults", form.adults.toString());
    params.append("children", form.children.toString());
    params.append("rooms", form.rooms.toString());
    params.append("dest_type", form.dest_type.toString());
    console.log(params);
  }

  useEffect(() => {
    async function getLocations() {
      const value = form.typedLocation;
      console.log(value);
      try {
        const locations = await loadLocaitons(value);
        setLocations(locations);
      } catch (e) {
        console.error(`${e} error`);
      }
    }
    const timeout = setTimeout(() => {
      getLocations();
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, [form.typedLocation]);

  const [selectedLocation, setSelectedLocation] = useState<Location>();

  function onLocationSelect(location: Location) {
    setSelectedLocation(location);
    setForm({
      ...form,
      location: location.dest_id,
      typedLocation: location.label,
      dest_type: location.dest_type,
    });
  }

  return (
    <form
      onSubmit={() => {
        loadParams();
        navigate(`search?${params.toString()}`);
      }}
      className="bg-yellow-500 mt-5 p-1 rounded"
    >
      <div className="flex gap-1 ">
        {/* First Search */}
        <div className="flex h-[52px] relative items-center bg-white gap-2 p-2 max-w-[360px] w-full rounded">
          <IoBedOutline className="text-gray-500 w-[28px] h-[28px]" />
          <input
            type="text"
            placeholder="Where are you going"
            className="outline-none text-[15px] rounded "
            onChange={(e) => {
              if (e.target.value === "") {
                setLocations([]);
              }

              setForm({
                ...form,
                typedLocation: e.target.value,
              });
            }}
            value={form.typedLocation}
          />
          {locations.length > 0 && (
            <div
              className=" absolute top-12 left-[-5px]
            flex flex-col shadow-xl rounded-[10px] min-w-[430px] w-full overflow-hidden"
            >
              {locations.map((location, id) => (
                <Locations
                  onLocationSelect={onLocationSelect}
                  key={id}
                  location={location}
                />
              ))}
            </div>
          )}
        </div>

        {/* End First Search */}

        {/* Second Search */}
        <DatePickerWithRange
          date={{
            from: new Date(form.startDate),
            to: new Date(form.endDate),
          }}
          setDate={(date: any) => {
            console.log(date);
            setForm({
              ...form,
              startDate: date?.from.toISOString() ?? form.startDate,
              endDate: date?.to.toISOString() ?? form.endDate,
            });
          }}
          className="h-[52px]"
        />
        {/* End Second Search */}

        {/* Third Search */}
        <div>
          <DropdownMenuRadioGroupDemo setForm={setForm} form={form} />
        </div>
        {/* End Third Search */}

        {/* Search Button */}
        <Button className="text-[20px] w-[115px] h-[52px] bg-blue-600">
          Search
        </Button>
        {/* End Search Button */}
      </div>
    </form>
  );
}
