import { useEffect } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { IoMdRemoveCircleOutline } from "react-icons/io";

const EditSquireFootageMatters = ({
  service,
  checkedSquareFootageMatters,
  setCheckedSquareFootageMatters,
  error,
}) => {
  const {
    control,
    register,
    required,
    validation,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    name: "sqftFields",
  });

  useEffect(() => {
    if (service?.sqftCheckbox) {
      setCheckedSquareFootageMatters(service.sqftCheckbox);
    }
  }, [setCheckedSquareFootageMatters]);

  useEffect(() => {
    if (service?.sqftCheckbox) {
      if (service?.squireFootageMatters.length > 0) {
        // Use service data to populate fields
        service.squireFootageMatters.forEach((sqft) => {
          append({
            range: sqft.range,
            monthlyPrice: sqft.monthlyPrice,
            initialPrice: sqft.initialPrice,
          });
        });
      }
    }
  }, []);

  console.log(fields);

  return (
    <div className="p-4 border rounded-lg">
      <div className="flex items-center mb-4">
        <input
          {...register("sqftCheckbox")}
          onChange={() =>
            setCheckedSquareFootageMatters(!checkedSquareFootageMatters)
          }
          id="sqft-checkbox"
          type="checkbox"
          value=""
          checked={checkedSquareFootageMatters}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
        />
        <label
          htmlFor="sqft-checkbox"
          className="ms-2 text-sm font-medium text-white "
        >
          Square Footage Matters?
        </label>
      </div>

      {checkedSquareFootageMatters && (
        <>
          {fields.map((field, index) => {
            return (
              <div key={field.id} className="flex items-center gap-3">
                <div className="flex flex-wrap gap-5 md:flex-nowrap">
                  <label className="flex-1 mb-3">
                    <span>Range</span>

                    <input
                      className={`  block w-full rounded-md border-0 py-1.5 text-white bg-dark2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3 flex-grow ${
                        errors[`sqftFields[${index}].range`]
                          ? "border-red-500 focus:ring-red-500 ring-red-500"
                          : ""
                      }`}
                      type="text"
                      {...register(`sqftFields.[${index}].range`, {
                        required: "Range is required.",
                      })}
                      id={`sqftFields[${index}].range`}
                      name={`sqftFields[${index}].range`}
                    />

                    {errors.sqftFields?.[index]?.range?.message && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.sqftFields[index].monthlyPrice.message}
                      </p>
                    )}
                  </label>

                  <label className="flex-1 mb-3">
                    <span>Monthly Price</span>
                    <input
                      className={`  block w-full rounded-md border-0 py-1.5 text-white bg-dark2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3 flex-grow ${
                        errors[name]
                          ? "border-red-500 focus:ring-red-500 ring-red-500"
                          : ""
                      }`}
                      type="text"
                      {...register(`sqftFields.[${index}].monthlyPrice`, {
                        required: "Monthly Price is required.",
                      })}
                      id={`sqftFields[${index}].monthlyPrice`}
                      name={`sqftFields[${index}].monthlyPrice`}
                    />

                    {errors.sqftFields?.[index]?.monthlyPrice?.message && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.sqftFields[index].monthlyPrice.message}
                      </p>
                    )}
                  </label>

                  <label className="flex-1 mb-3">
                    <span>Initial Price</span>
                    <input
                      className={`  block w-full rounded-md border-0 py-1.5 text-white bg-dark2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3 flex-grow ${
                        errors[name]
                          ? "border-red-500 focus:ring-red-500 ring-red-500"
                          : ""
                      }`}
                      type="text"
                      {...register(`sqftFields.[${index}].initialPrice`, {
                        required: "Initial Price is required.",
                      })}
                      id={`sqftFields[${index}].initialPrice`}
                      name={`sqftFields[${index}].initialPrice`}
                    />
                    {errors.sqftFields?.[index]?.initialPrice?.message && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.sqftFields[index].initialPrice.message}
                      </p>
                    )}
                  </label>
                </div>
                <button
                  className="mt-2 text-2xl"
                  type="button"
                  onClick={() => remove(index)}
                >
                  <IoMdRemoveCircleOutline />
                </button>
              </div>
            );
          })}

          {error?.message && (
            <p className="mb-2 text-red-500">{error?.message}</p>
          )}

          {fields.length <= 0 ? (
            <button
              type="button"
              onClick={() =>
                append({ range: "", monthlyPrice: "", initialPrice: "" })
              }
              className="px-2 py-1.5 border border-white rounded-md"
            >
              Click here to start
            </button>
          ) : (
            <button
              type="button"
              onClick={() =>
                append({ range: "", monthlyPrice: "", initialPrice: "" })
              }
              className="px-2 py-1.5 border border-white rounded-md"
            >
              append
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default EditSquireFootageMatters;
