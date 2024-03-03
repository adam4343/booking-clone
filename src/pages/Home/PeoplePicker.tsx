import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { LuDot } from "react-icons/lu";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
type Form = {
  location: string;
  startDate: string;
  endDate: string;
  adults: number;
  children: number;
  rooms: number;
};
export function DropdownMenuRadioGroupDemo({
  form,
  setForm,
}: {
  form: Form;
  setForm: (form: Form) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        className="bg-white max-h-[52px] h-full rounded max-w-[300px] w-full p-2"
        asChild
      >
        <div
          onClick={() => {
            setOpen(true);
          }}
          className="flex items-center gap-5 "
        >
          <div className="flex items-center gap-1">
            <AiOutlineUser className="w-[24px] h-[24px] text-gray-500" />
            <div className="flex items-center">
              <p className="text-[14px] whitespace-pre">{form.adults} adults</p>
              <LuDot className="text-[14px]" />
              <p className="text-[14px] whitespace-pre">
                {form.children} children
              </p>
              <LuDot className="text-[14px]" />
              <p className="text-[14px]  whitespace-pre">{form.rooms} rooms</p>
            </div>
          </div>
          <RiArrowDropDownLine className="text-[26px]" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[350px] h-[250px] p-10 ">
        <div className="flex flex-col gap-3 ">
          {/* adults */}
          <div className="flex justify-between items-center ">
            <h3 className="font-semibold text-[14px]">Adults</h3>

            <div className="flex max-w-[126px] w-full items-center p-2 py-[7px] rounded justify-between border border-gray-500">
              <button
                type="button"
                disabled={form.adults <= 1}
                className="disabled:opacity-50  group"
              >
                <FiMinus
                  onClick={() => {
                    setForm({
                      ...form,
                      adults: form.adults - 1,
                    });
                  }}
                  className="cursor-pointer group group-disabled:text-gray-500  text-blue-600 "
                />
              </button>
              <p className="text-[14px] font-[500]">{form.adults}</p>
              <GoPlus
                onClick={() => {
                  setForm({
                    ...form,
                    adults: form.adults + 1,
                  });
                }}
                className="cursor-pointer text-blue-600"
              />
            </div>
          </div>
          {/* children */}
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-[14px]">Children</h3>
            <div className="flex max-w-[126px] w-full items-center p-2 py-[7px] rounded justify-between border border-gray-500">
              <button
                type="button"
                disabled={form.children <= 0}
                className="disabled:opacity-50  group"
              >
                <FiMinus
                  onClick={() => {
                    setForm({
                      ...form,
                      children: form.children - 1,
                    });
                  }}
                  className="cursor-pointer group group-disabled:text-gray-500  text-blue-600 "
                />
              </button>
              <p className="text-[14px] font-[500]">{form.children}</p>
              <GoPlus
                onClick={() => {
                  setForm({
                    ...form,
                    children: form.children + 1,
                  });
                }}
                className="cursor-pointer text-blue-600"
              />
            </div>
          </div>
          {/* rooms */}
          <div className="flex justify-between items-center ">
            <h3 className="font-semibold text-[14px]">Rooms</h3>

            <div className="flex max-w-[126px] w-full items-center p-2 py-[7px] rounded justify-between border border-gray-500">
              <button
                type="button"
                disabled={form.rooms <= 1}
                className="disabled:opacity-50  group"
              >
                <FiMinus
                  onClick={() => {
                    if (form.rooms <= 1) {
                      return;
                    }
                    setForm({
                      ...form,
                      rooms: form.rooms - 1,
                    });
                  }}
                  className="cursor-pointer group group-disabled:text-gray-500  text-blue-600 "
                />
              </button>
              <p className="text-[14px] font-[500]">{form.rooms}</p>
              <GoPlus
                onClick={() => {
                  setForm({
                    ...form,
                    rooms: form.rooms + 1,
                  });
                }}
                className="cursor-pointer text-blue-600"
              />
            </div>
          </div>
          <button
            onClick={() => {
              setOpen(false);
            }}
            className="hover:bg-gray-100 transition duration-200 ease-in mt-2 w-full border border-blue-600 rounded text-blue-600 pt-1 pb-1 text-[14px] font-semibold"
          >
            Done
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
