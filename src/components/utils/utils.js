import { nanoid } from "nanoid";

export const formatPrice = (price) => {
  return new Intl.NumberFormat().format(price);
};

const navData = [
  {
    pageID: nanoid(),
    page: "courses",
    links: [
      {
        id: nanoid(),
        label: "forex trading",
        url: "/forex-trading",
      },
      {
        id: nanoid(),
        label: "crypto trading",
        url: "/crypto-trading",
      },
      {
        id: nanoid(),
        label: "stock trading",
        url: "/stock-trading",
      },
      {
        id: nanoid(),
        label: "commodities trading",
        url: "/commodities-trading",
      },
      // {
      //   id: nanoid(),
      //   label: "FTMO course",
      //   url: "/chime-platform/FTMO",
      // },
    ],
  },
  {
    pageID: nanoid(),
    page: "robots",
    links: [
      {
        id: nanoid(),
        label: "forex robots",
        url: "/forex-robots",
      },
      {
        id: nanoid(),
        label: "commodities robots",
        url: "/commodities-robots",
      },
      {
        id: nanoid(),
        label: "crypto robots",
        url: "/crypto-robots",
      },
      // {
      //   id: nanoid(),
      //   label: "prop robots",
      //   url: "chime-platform/prop-robots",
      // },
    ],
  },
  {
    pageID: nanoid(),
    page: "signals",
    links: [
      {
        id: nanoid(),
        label: "Get added to our telegram group",
        url: "/signals",
      },
    ],
  },
];

export default navData;
