import InputField from "@/components/InputField";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

const Subscription = ({ service, checkedSquareFootageMatters }) => {
  const { register } = useFormContext();

  const [checkedInitialPrice, setCheckedInitialPrice] = useState(
    service?.subscriptionService?.initialPriceCheckbox
  );

  return (
    <div>
      <InputField
        name="subscriptionPrice"
        type="text"
        label="Subscription Price"
        required
        errorMessage="Subscription Price is required"
        defaultValue={service?.subscriptionService?.subscriptionPrice}
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
          {...register("initialPriceCheckbox", {
            disabled: checkedSquareFootageMatters,
          })}
          onChange={() => setCheckedInitialPrice(!checkedInitialPrice)}
          id="initialPriceCheckbox"
          type="checkbox"
          checked={checkedInitialPrice}
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-600 rounded focus:ring-blue-500 "
          disabled={checkedSquareFootageMatters}
        />
        <label
          htmlFor="initialPriceCheckbox"
          className={`${
            checkedSquareFootageMatters
              ? "text-gray-600 cursor-not-allowed "
              : "text-white "
          } 
          ms-2 text-sm font-medium `}
        >
          Initial Price Different?
        </label>
      </div>

      {checkedInitialPrice && (
        <InputField
          defaultValue={service?.subscriptionService?.initialPrice}
          name="initialPrice"
          type="text"
          // placeholder="Service Name"
          label="Initial Price"
          required
          errorMessage="First Name is required"
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

export default Subscription;
