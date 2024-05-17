import InputField from "@/components/InputField";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

const OneTime = ({ service, checkedSquareFootageMatters }) => {
  const { register } = useFormContext();

  const [checkedFollowUpPrice, setCheckedFollowUpPrice] = useState(
    service?.followUpPrice || false
  );

  useEffect(() => {
    if (service?.oneTimeService?.followUpCheckbox) {
      setCheckedFollowUpPrice(service?.oneTimeService?.followUpCheckbox);
    }
  }, [service?.oneTimeService?.followUpCheckbox]);

  return (
    <div>
      <InputField
        name="price"
        type="text"
        defaultValue={service?.oneTimeService?.price}
        label="Price"
        required
        errorMessage="Price is required"
        className={
          checkedSquareFootageMatters && "text-gray-600 cursor-not-allowed "
        }
        labelClassName={
          checkedSquareFootageMatters && "!text-gray-600 cursor-not-allowed"
        }
        disabled={checkedSquareFootageMatters}
      />

      <div className="flex items-center mb-4">
        <input
          {...register("followUpCheckbox", {
            disabled: checkedSquareFootageMatters,
          })}
          onChange={() => setCheckedFollowUpPrice(!checkedFollowUpPrice)}
          id="default-checkbox"
          type="checkbox"
          checked={checkedFollowUpPrice}
          className="w-4 h-4  bg-gray-100 border-gray-600 rounded"
          disabled={checkedSquareFootageMatters}
        />
        <label
          htmlFor="default-checkbox"
          className={`${
            checkedSquareFootageMatters
              ? "text-gray-600 cursor-not-allowed"
              : "text-white"
          } 
          ms-2 text-sm font-medium`}
        >
          Follow Up?
        </label>
      </div>
      {checkedFollowUpPrice && (
        <InputField
          name="followUpPrice"
          type="text"
          label="Follow Up Price"
          defaultValue={service?.oneTimeService?.followUpPrice}
          className={
            checkedSquareFootageMatters && "text-gray-600 cursor-not-allowed "
          }
          labelClassName={
            checkedSquareFootageMatters && "text-gray-600 cursor-not-allowed"
          }
          disabled={checkedSquareFootageMatters}
        />
      )}
    </div>
  );
};

export default OneTime;
