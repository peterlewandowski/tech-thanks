import { Box, Typography } from "@mui/material";
export default function LeaderboardItem({ name, score }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Typography>{name}</Typography>
      <Typography>{score}</Typography>
    </Box>
  );
}
