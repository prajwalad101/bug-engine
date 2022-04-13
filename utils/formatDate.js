export default function formatDate(date) {
  const formatter = new Intl.RelativeTimeFormat("en-us", { style: "long" });

  const DIVISIONS = [
    { amount: 60, name: "seconds" },
    { amount: 60, name: "minutes" },
    { amount: 24, name: "hours" },
    { amount: 7, name: "days" },
    { amount: 4.34524, name: "weeks" },
    { amount: 12, name: "months" },
    { amount: Number.POSITIVE_INFINITY, name: "years" },
  ];

  let duration = (date - new Date()) / 1000; // get duration between dates in seconds

  for (let i = 0; i <= DIVISIONS.length; i++) {
    const division = DIVISIONS[i];

    if (Math.abs(duration) < division.amount) {
      return formatter.format(Math.round(duration), division.name);
    }
    duration /= division.amount;
  }
}

export function getFormattedDate(createdAt) {
  const months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date(createdAt);
  const year = d.getFullYear();
  const date = d.getDate();

  const monthIndex = d.getMonth();
  const month = months[monthIndex];

  return `${date} ${month} ${year}`;
}
