"use server";

import { productTypes } from "../types/products";
const url = process.env.APP_URL;

export const getProducts = async (): Promise<productTypes[]> => {
  try {
    const res = await fetch(`${url}/notebook`);
    const data = await res.json();
    return data;
  } catch (error) {
    const message = (error as Error).message;
    throw new Error(message);
  }
};