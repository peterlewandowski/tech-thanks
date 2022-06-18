import { Box, Typography } from "@mui/material";
export default function LeaderboardItem({ name, email, thankcoins }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Typography>{name}</Typography>
      <Typography>{email}</Typography>
      <Typography>{thankcoins}⭐️</Typography>
    </Box>
  );
}
