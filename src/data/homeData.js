import playStore from "../assets/playStore.ico";
import appStore from "../assets/appStore.png";


const homePageContent = {
  heroSection: {
    buttons: [
      {
        id: "playStoreBtn",
        text: "Google Play",
        iconAsset: playStore,
        link: "https://play.google.com/store/apps",
      },
      {
        id: "appStoreBtn",
        text: "App Store",
        iconAsset: appStore,
        link: "https://www.apple.com/app-store/",
      },
    ],
    
  },
  statsSection: {
    title: "Trusted By Millions, Built For You",
    stats: [
      {
        id: "statDownloads",
        value: "29.6M",
        label: "Total Downloads",
        description: "21% More Than Last Month",
      },
      {
        id: "statReviews",
        value: "906K",
        label: "Total Reviews",
        description: "46% More Than Last Month",
      },
      {
        id: "statApps",
        value: "132+",
        label: "Active Apps",
        description: "31% More Will Launch",
      },
    ],
  },
};

export default homePageContent;
