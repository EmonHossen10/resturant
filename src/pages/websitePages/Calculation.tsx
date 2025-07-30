import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const Calculation = ({
  cartItems = {},
  selectedDateTime,
  nextStep,
  hasItems,
}) => {
  const { professional, date, time } = selectedDateTime || {};
  const [showDrawer, setShowDrawer] = useState(false);

  const groupedItems = cartItems;

  const totalPrice = Object.values(groupedItems).reduce(
    (sum, item) =>
      sum + (item.discountPrice || item.currentPrice || 0) * (item.count ?? 1),
    0
  );

  return (
    <>
      {/* Desktop view (unchanged) */}
      <div className="hidden md:flex flex-col gap-10">
        <div className="bg-white rounded-lg space-y-3 p-4">
          <h2 className="font-bold text-sm pb-3">Booking Details</h2>

          <div className="flex justify-between">
            <p className="w-1/2 text-gray-400">Address:</p>
            <p className="w-1/2">
              34HQ+W25 - Jumeirah Beach Residence - Dubai - UAE
            </p>
          </div>

          <div className="flex justify-between">
            <p className="w-1/2 text-gray-400">Service:</p>
            <p className="w-1/2">Furniture Cleaning</p>
          </div>

          {Object.keys(cartItems).length > 0 && (
            <div className="flex">
              <p className="text-gray-400 w-1/2 pr-4">Service Details</p>
              <div className="w-1/2 flex flex-col space-y-1">
                {Object.values(groupedItems).map((item, index) => (
                  <p key={index}>
                    {item.count ?? 1}× {item.title}
                  </p>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-between">
            {date && <p className="w-1/2 text-gray-400">Date:</p>}
            <p className="w-1/2">{date}</p>
          </div>
          <div className="flex justify-between">
            {time && <p className="w-1/2 text-gray-400">Time:</p>}
            <p className="w-1/2">{time}</p>
          </div>
          <div className="flex justify-between">
            {professional && (
              <p className="w-1/2 text-gray-400">Professional:</p>
            )}
            <p className="w-1/2">{professional?.name || professional}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4">
          <h2 className="font-bold text-sm pb-3">Payment Summary</h2>
          <div className="flex justify-between">
            <p className="w-1/2">Total</p>
            <p className="w-1/2">AED {totalPrice.toFixed(2)}</p>
          </div>
        </div>
      </div>

      {/* Mobile bottom drawer */}

      {/* Mobile wrapper */}
      <div className="md:hidden">
        {/* Drawer Panel */}
        <div
          className={`fixed bottom-12 left-0 right-0 bg-white transition-transform duration-300 transform max-h-[70vh] overflow-y-auto rounded-t-xl shadow-lg
      ${showDrawer ? "translate-y-0" : "translate-y-full"}
    `}
          style={{ boxShadow: "0 -4px 20px rgba(0,0,0,0.1)" }}
        >
          {/* Padding inside drawer */}
          <div className="p-4">
            <h2 className="font-bold text-sm pb-3">Booking Details</h2>
            {/* Other booking info */}
            <div className="flex justify-between mt-4">
              <p className="w-1/2 text-gray-400">Address:</p>
              <p className="w-1/2 text-sm">
                34HQ+W25 - Jumeirah Beach Residence - Dubai - UAE
              </p>
            </div>

            {/* Dynamic cart items */}
            {Object.values(cartItems).length > 0 ? (
              Object.values(cartItems).map((item, index) => (
                <div key={index} className="flex justify-between mb-2">
                  <p className="w-1/2 text-gray-700">
                    {item.count}× {item.title}
                  </p>
                  <p className="w-1/2 text-right text-gray-900">
                    AED{" "}
                    {(
                      (item.discountPrice || item.currentPrice || 0) *
                      item.count
                    ).toFixed(2)}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No items added yet.</p>
            )}

            {/* Add other details like date/time/professional here if you want */}
          </div>
        </div>

        {/* Total bar (always visible front) */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 shadow-md flex items-center justify-between z-50">
          <div
            onClick={() => setShowDrawer(!showDrawer)}
            className="cursor-pointer flex items-center gap-2"
          >
            <div className="font-semibold flex flex-col leading-none">
              <span className="text-gray-500 text-xs">Total</span>
              <span className="text-base">AED {totalPrice.toFixed(2)}</span>
            </div>
            {showDrawer ? (
              <ChevronDown className="w-5 h-5" />
            ) : (
              <ChevronUp className="w-5 h-5" />
            )}
          </div>

          <button
            onClick={nextStep}
            disabled={!hasItems}
            className={`ml-4 px-5 py-2 rounded-full text-white text-sm font-semibold ${
              hasItems
                ? "bg-yellow-400 hover:bg-yellow-500"
                : "bg-yellow-400 opacity-50 cursor-not-allowed"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculation;
