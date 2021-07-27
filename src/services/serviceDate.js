//2020-02-05T11:17:28-03:00 to 05/02/2020
export default function dateFormater(dataHora) {
  if (dataHora) {
    const dateHour = new Date(dataHora);
    const date = new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(dateHour);
    return date.split(" ")[0];
  }
}
