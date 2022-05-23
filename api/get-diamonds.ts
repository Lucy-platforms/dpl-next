// import { NEXT_BASE_URL } from "config";
import { GetDiamondsStats } from "types/api";

export const getDiamondsStats = async () => {
  return {
    availableDiamonds: "1.7M",
    suppliers: "4,800",
    totalValue: "$6.7B",
  } as GetDiamondsStats;
  // const res = await fetch(`${NEXT_BASE_URL}/get-diamonds/stats`, {
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   method: "GET",
  // });
  // const data = await res.json();
  // return data as GetDiamondsStats;
};