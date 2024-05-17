// Upload image to ImageBB
export const uploadImageToImageBB = async (selectedImage) => {
  if (!selectedImage) {
    console.error("No image selected");
    return null;
  }

  const img_api = "beebca3bce1b31a3f5cffc6c8576c86f";
  const formData = new FormData();
  formData.append("image", selectedImage);
  const url = `https://api.imgbb.com/1/upload?key=${img_api}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.data.url; // Return the image URL
  } catch (error) {
    console.error("Error during image upload:", error);
    return null;
  }
};

// fetch data
export async function getData(api) {
  const res = await fetch(api);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}

// date format function
export function formatDateString(dateStr) {
  const dateObj = new Date(dateStr);
  const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const day = String(dateObj.getDate()).padStart(2, "0");
  const year = String(dateObj.getFullYear()).slice(-2); // Get last two digits of the year

  return `${month}-${day}-${year}`;
}
