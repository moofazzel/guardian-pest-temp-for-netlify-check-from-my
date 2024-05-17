import TextAreaField from "@/components/TextAreaField";

function Others({ service }) {
  return (
    <div>
      <TextAreaField
        rows={3}
        defaultValue={service?.otherService?.descriptionPrice}
        label="Description Price Box"
        name="descriptionPriceBox"
        maxLength={600}
        placeholder="Write Price Description Here..."
        required
      />
    </div>
  );
}

export default Others;
