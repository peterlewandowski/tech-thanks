import { Container } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "#", width: 90 },
  { field: "date", headerName: "Date", width: 150 },
  {
    field: "amount",
    headerName: "ThankCoins",
    width: 150,
    editable: true,
  },
  {
    field: "title",
    headerName: "Sent to",
    width: 150,
    editable: true,
  },
];

export default function ThankerHistory() {
  const { user } = useContext(UserContext);
  const [historyItems, setHistoryItems] = useState([]);

  useEffect(() => {
    setHistoryItems(user.history);
  }, []);

  //   const historyElements = historyItems.map((item) => {
  //     const { title, amount, date } = item;
  //     return <HistoryItem key={date} title={title} amount={amount} date={date} />;
  //   });

  //   console.log(historyElements);
  console.log(historyItems);

  const rows = historyItems.map(item => {
    return {
        id: item.id,
        date: item.date,
        amount: item.amount,
        title: item.title,
    }});

//   console.log("rows" + rows);

    const rows2 = [
        { id: 1, date: "06/19/22", amount: 'Snow', title: 'Jon', age: 35 },
    ];

  return (
    <div>
      <h3>Your History:</h3>
      {user.thankcoins}
      <Container maxWidth="sm">
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid rows={rows} columns={columns} />
        </Box>
      </Container>
    </div>
  );
}
