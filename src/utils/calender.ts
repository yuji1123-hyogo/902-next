export function getCalenderDays(year: number, monthIndex: number) {
  const firstDay = new Date(year, monthIndex, 1);
  // dayで0を指定すると月の最終日になる
  const lastDay = new Date(year, monthIndex, 0);

  // その月の日数を取得
  const daysInMonth = lastDay.getDate();

  // 月の初めの曜日を取得
  const startDate = firstDay.getDay();

  const days: { date: number; isCurrentMonth: boolean; fullDate: Date }[] = [];

  // カレンダーは毎行、月~日の7日分の表示のため前月の日付が今月のカレンダに食い込む可能性もある
  // (例:日月は前月の30~31日を表示, 火曜から今月の1日~を順に表示)

  // 前月最終日
  const prevMonthLastDay = new Date(year, monthIndex - 1, 0);

  // 前月からの食い込み日
  for (let i = startDate - 1; i >= 0; i--) {
    days.push({
      date: prevMonthLastDay.getDate() - i,
      isCurrentMonth: false,
      fullDate: new Date(year, monthIndex - 1, prevMonthLastDay.getDate() - i),
    });
  }
  //今月の日付
  for (let date = 1; date <= daysInMonth; date++) {
    days.push({
      date: date,
      isCurrentMonth: true,
      fullDate: new Date(year, monthIndex, date),
    });
  }
  //来月の日付を表示(本カレンダーは42日づつ表示する)
  const remainingDays = 42 - days.length;
  for (let date = 1; date <= remainingDays; date++) {
    days.push({
      date,
      isCurrentMonth: false,
      fullDate: new Date(year, monthIndex + 1, date),
    });
  }

  return days;
}

// 日付オブジェクトをISO形式("2025-09-04T15:30:00Z")に変換
// いい感じの部分だけ取り出す("2025-09-04")
export function formatDateForInput(date: Date): string {
  return date.toISOString().split("T")[0];
}
