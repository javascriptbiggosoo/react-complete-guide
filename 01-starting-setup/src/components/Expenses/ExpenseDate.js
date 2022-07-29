import "./ExpenseDate.css";

function ExpenseDate({ date }) {
  const month = date.toLocaleString("ko-KR", { month: "long" });
  const day = date.toLocaleString("ko-KR", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-day">{day}</div>
      <div className="expense-year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
