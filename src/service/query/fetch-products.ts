"use server";
export async function fetchProducts(searchTerm: string) {
  const url = process.env.APP_URL;

  if (searchTerm) {
    const response = await fetch(`${url}/all?title_like=${searchTerm}`);
    if (!response.ok) {
      throw new Error("Error fetching products");
    }
    return response.json();
  } else {
    return [];
  }
}