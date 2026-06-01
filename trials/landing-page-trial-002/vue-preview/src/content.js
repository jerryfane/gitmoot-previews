import trialData from "./trial-data.json";

const options = trialData.options;
const pages = Object.fromEntries(trialData.items.map((item) => [item.id, item]));

export function currentPage() {
  const itemId = import.meta.env.VITE_ITEM_ID || trialData.items[0].id;
  const optionId = import.meta.env.VITE_OPTION_ID || "a";
  return {
    itemId,
    optionId,
    page: pages[itemId] || trialData.items[0],
    option: options[optionId] || options.a,
  };
}
