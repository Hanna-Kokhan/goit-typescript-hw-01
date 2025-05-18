import axios, { AxiosResponse, AxiosError } from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error: any) {
    const axiosError = error as AxiosError;
    const errorMessage =
      axiosError?.message || error?.message || "An unexpected error occurred";
    throw new Error(`Error fetching from ${url}: ${errorMessage}`);
  }
}
