import { PhoneCodesResponse } from "../types/phoneCodes";

export async function fetchPhoneCodes(): Promise<PhoneCodesResponse> {
  const res = await fetch("https://693c1fecb762a4f15c3f88c1.mockapi.io/phone");

  if (!res.ok) throw new Error("Failed to Fetch");

  return res.json();
}
