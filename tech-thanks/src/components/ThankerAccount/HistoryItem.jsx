import { Box, Typography } from "@mui/material";
export default function HistoryItem({title, amount, date}) {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Typography>{title}</Typography>
      <Typography>{amount}</Typography>
      <Typography>{date}</Typography>
    </Box>
  );
}
