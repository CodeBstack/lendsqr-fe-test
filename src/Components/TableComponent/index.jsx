import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import LoadingTable from "./LoadingTable";
import ErrorMsg from "../ErrorMsg";
import TablePagination from "../TablePagination";
import {IconButton, TableHead} from "@mui/material";
import DropDownWrapper from "../DropDownWrapper";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EmptyResponse from "components/mui-components/EmptyResponse";
import {titleCase} from "utils";

const headCellTest = [
  {
    key: "name",
    name: "Full Name",
  },
  {
    key: "email",
    name: "Email Address",
  },
  {
    key: "number",
    name: "Phone Number",
  },
  {
    key: "links",
    name: "Links created",
  },
  {
    key: "date",
    name: "Date joined",
  },
];

export default function TableComponent({
  tableData = Array(7)
    .fill("")
    .map((_, i) => ({
      name: "Jacob Jones",
      number: "(405) 555-0128",
      email: "deanna.curtis@example.com",
      role: "01/01/2020",
      action: "",
      id: `row_${i}`,
    })),
  isLoading,
  isError,
  error,
  headCells = headCellTest,
  isPage = false,
  meta = {
    totalPages: 10,
    totalCount: 200,
    currentPage: 1,
  },
  setPerPage,
  perPage,
  page,
  setPage,
  scrollX = true,
  scrollY = false,
  maxHeight = "350px",
  alignLastTdRight = true,
  borderBottom = true,
  minWidth = "100%",
  ...props
}) {
  if (isLoading) {
    return <LoadingTable />;
  }
  if (isError) {
    return <ErrorMsg error={error} />;
  }
  return (
    <Box sx={{width: "100%", overflow: scrollY ? "hidden" : "auto"}}>
      <TableContainer
        className="scrollbar-style"
        sx={{maxHeight: scrollY ? maxHeight : "unset"}}
      >
        <Table
          {...props}
          sx={{minWidth: scrollX ? minWidth : "unset"}}
          aria-labelledby="tableTitle"
        >
          <TableHead
            className="bg-grey_80 font-Bai"
            sx={{
              "& th:first-of-type": {},
              "& th:last-of-type": {
                textAlign: alignLastTdRight ? "right" : "left",
              },
              "& th": {
                border: "none",
                backgroundColor: `${props.th_bg}`,
              },
            }}
          >
            <TableRow hover={false}>
              {headCells.map((headCell, i) => (
                <TableCell
                  className={`truncate ${props.upperCase ? "uppercase" : ""} `}
                  key={headCell.key}
                  align={"left"}
                  sx={{
                    py: 3,
                    fontSize: props.fontSize || "20px",
                    color: "#3B3D3B",
                    fontWeight: "600",
                  }}
                  padding={"normal"}
                >
                  {titleCase(headCell.name)}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.length <= 0 && (
              <TableRow hover={false}>
                <TableCell colSpan={headCells.length + 1}>
                  <EmptyResponse message={"No record found"} />
                </TableCell>
              </TableRow>
            )}
            {tableData.map((row, rowIndex) => {
              return (
                <TableRow
                  className="mt-4 rounded-2xl border-2 border-grey_70 bg-grey_90 "
                  sx={{
                    "& td": {
                      // borderBottomWidth: borderBottom ? "1px" : 0,
                      // marginTop: 14,
                      "&:last-child": {
                        textAlign: alignLastTdRight ? "right" : "left",
                      },
                    },
                  }}
                  hover
                  tabIndex={-1}
                  key={`table-row-${rowIndex}`}
                >
                  {headCells
                    .filter(col => col.key !== "actions")
                    .map((col, colIndex) => (
                      <TableCell
                        className={`${colIndex === 0 ? "pd-checkbox" : ""} ${
                          col.key === "action" ? "td-checkbox" : ""
                        } truncate`}
                        sx={{
                          py: 1.5,
                          fontSize: "16px",
                          color: "#6E726E",
                          fontWeight: "400",
                        }}
                        align="left"
                        key={`-row_${rowIndex}-col_${colIndex}`}
                      >
                        {row[col.key]}
                      </TableCell>
                    ))}

                  {row?.actions && (
                    <TableCell className="td-checkbox">
                      <DropDownWrapper
                        position="right"
                        className="more-actions"
                        action={
                          <IconButton
                            className="more-action-btn"
                            aria-label="actions"
                          >
                            <MoreHorizIcon />
                          </IconButton>
                        }
                      >
                        {row?.actions}
                      </DropDownWrapper>
                    </TableCell>
                  )}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {isPage && (
        <TablePagination
          meta={{...meta, rowCount: tableData.length}}
          page={page}
          setPage={setPage}
          perPage={perPage}
          setPerPage={setPerPage}
        />
      )}
    </Box>
  );
}
