import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

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

  const rows = historyItems.map((item) => {
    return {
      id: item.id,
      date: item.date,
      amount: item.amount,
      title: item.title,
    };
  });

  return (
    <><Box>
        <Typography
            variant="h5"
            sx={{
              p: 1,
              fontFamily: "monospace",
              fontWeight: 300,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              textAlign: "center",
            }}>Your History</Typography>
      <Container maxWidth="sm">
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid rows={rows} columns={columns} />
        </Box>
      </Container>
    </Box>
    </>
  );
}
