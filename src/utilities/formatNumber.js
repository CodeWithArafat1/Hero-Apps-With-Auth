function formatNumber(number) {
  if (isNaN(number) || number === null) {
    return "0";
  }

  const formatter = new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  });

  return formatter.format(number);
}

export default formatNumber;
