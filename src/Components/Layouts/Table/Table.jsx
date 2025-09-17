import PropTypes from "prop-types";
import { useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

import "./BasicTable.css";

import rows from "../../../assets/data/KKPRL.json";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: "1.8rem",
  boxShadow: "var(--box-shadow)",
}));

const StyledTable = styled(Table)(({ theme }) => ({
  borderRadius: "1.8rem",
  overflow: "hidden",
  "& th": {
    // Targeting table header cells
    fontFamily: "var(--font-pop)",
    fontSize: ".8rem",
    backgroundColor: "var(--color-dark-variant)",
    fontWeight: 700,
    color: "var(--color-white)",
    padding: theme.spacing(2),
  },
  "& td1": {
    fontSize: ".7rem",
    color: "var(--color-dark)",
    padding: theme.spacing(1.2),
    fontFamily: "var(--font-pop)",
    backgroundColor: "var(--color-white)",

    fontWeight: 600,
  },
  "& td": {
    // Targeting table data cells
    fontWeight: 400,
    color: "var(--color-dark)",
    fontFamily: "var(--font-pop)",
    fontSize: ".7rem",
    padding: theme.spacing(1),
  },
}));

export default function BasicTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <div className="tables__component">
      <h3>Kesesuaian Kegiatan Pemanfaatan Ruang Laut (KKPRL) <br/> Rencana Tata Ruang Wilayah (RTRW) Provinsi Kalimantan Timur</h3>
      <StyledTableContainer component={Paper}>
        <StyledTable sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell component="th" align="center">
                No.
              </TableCell>
              <TableCell component="th" align="center">
                Kode Kawasan
              </TableCell>
              <TableCell component="th" align="center">
                NAMOBJ
              </TableCell>
              <TableCell component="th" align="center">
                ORDE01
              </TableCell>
              <TableCell component="th" align="center">
                JNSRPR
              </TableCell>
              <TableCell component="th" align="center">
                REMARK
              </TableCell>
              <TableCell component="th" align="right">
                LUASHA
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow key={row.OBJECTID}>
                <TableCell component="td1" style={{ width: 10 }} align="center">
                  {row.OBJECTID}.
                </TableCell>
                <TableCell
                  style={{ width: 130 }}
                  component="td1"
                  scope="row"
                  align="center"
                >
                  {row.KODKWS}
                </TableCell>
                <TableCell component="td" align="center" style={{ width: 160 }}>
                  {row.NAMOBJ}
                </TableCell>
                <TableCell component="td" align="center" style={{ width: 160 }}>
                  {row.ORDE01}
                </TableCell>
                <TableCell component="td" align="center" style={{ width: 160 }}>
                  {row.JNSRPR}
                </TableCell>
                <TableCell component="td" style={{ width: 260 }}>
                  {row.REMARK}
                </TableCell>
                <TableCell component="td1" style={{ width: 160 }} align="right">
                  {new Intl.NumberFormat("id-ID", {
                    style: "decimal",
                    maximumFractionDigits: 2,
                  }).format(row.LUASHA)}
                  <span component="comp">&nbsp;(ha)</span>
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10, 25, 50, { label: "All", value: -1 }]}
                colSpan={7}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                slotProps={{
                  select: {
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  },
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </StyledTable>
      </StyledTableContainer>
    </div>
  );
}
