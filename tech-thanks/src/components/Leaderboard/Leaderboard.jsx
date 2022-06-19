import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { alpha, styled } from "@mui/material/styles";
import { DataGrid, gridClasses, GridColDef } from "@mui/x-data-grid";
import { getLeaderboardItems } from "../services/leaderboard";

const columns = [
  { field: "id", headerName: "#", width: 50 },
  { field: "name", headerName: "Name", width: 175 },
  {
    field: "email",
    headerName: "Email",
    width: 200,
    editable: true,
  },
  {
    field: "thankcoins",
    headerName: "ThankCoins",
    width: 125,
    editable: true,
  },
];

const ODD_OPACITY = 0.2;

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: theme.palette.grey[100],
    "&:hover, &.Mui-hovered": {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
    "&.Mui-selected": {
      backgroundColor: alpha(
        theme.palette.primary.main,
        ODD_OPACITY + theme.palette.action.selectedOpacity
      ),
      "&:hover, &.Mui-hovered": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY +
            theme.palette.action.selectedOpacity +
            theme.palette.action.hoverOpacity
        ),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  },
}));

export default function Leaderboard() {
  const [leaderboardItems, setLeaderboardItems] = useState([]);

  useEffect(() => {
    getLeaderboardItems().then((data) => setLeaderboardItems(data));
  }, []);

  const rows = leaderboardItems.map((item) => {
    return {
      id: item.id,
      name: item.name,
      email: item.email,
      thankcoins: item.thankcoins,
    };
  });

  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ height: 400, width: "100%" }}>
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
            }}
          >
            Leaderboard
          </Typography>
          <StripedDataGrid
            sx={{ color: "#000" }}
            rows={rows}
            columns={columns}
            getRowClassName={(params) =>
              params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "even"
            }
          />
        </Box>
      </Container>
    </>
  );
}
