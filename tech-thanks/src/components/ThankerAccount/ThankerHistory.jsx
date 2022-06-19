import { Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import HistoryItem from "./HistoryItem";

export default function ThankerHistory() {
  const { user } = useContext(UserContext);
  const [historyItems, setHistoryItems] = useState([]);

  useEffect(() => {
    setHistoryItems(user.history);
  }, []);

  const historyElements = historyItems.map((item) => {
    const { title, amount, date } = item;
    return <HistoryItem key={date} title={title} amount={amount} date={date} />;
  });

  return (
    <>
      <Typography>Your History:</Typography>
      {user.thankcoins}
      {historyElements}
    </>
  );
}
