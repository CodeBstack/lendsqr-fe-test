import MUIDataTable from "mui-datatables";
import UserDisplay from "./UserDisplay";
import "./style.scss";
// import SearchInput from "components/forms/SearchInput";
import LoadingTable from "./LoadingTable";
// import ErrorMsg from "components/mui-components/ErrorMsg";
import { Chip, IconButton } from "@mui/material";
// import DropDownWrapper from "components/mui-components/DropDownWrapper";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import EmptyResponse from "components/mui-components/EmptyResponse";
// import QuestionMarkIcon from "components/Vectors/QuestionMarkIcon";
import { createElement } from "react";
import SearchInput from "../SearchInput";
import DropDownWrapper from "../DropDownWrapper";
import EmptyResponse from "../EmptyResponse";
import ErrorMsg from "../ErrorMsg";
import QuestionMarkIcon from "../Vectors/QuestionMarkIcon";


export const filterOption = {
  options: {
    filter: true,
  },
};
export const TableDropDown = ({ children, tableId }) => (
  <DropDownWrapper
    position="right"
    extraClick={() => {
      setTimeout(() => {
        document.querySelector(`#${tableId} div table`).parentElement.scroll({
          top:
            document.querySelector(`#${tableId} div table`).parentElement
              .scrollHeight + 500,
          left:
            document.querySelector(`#${tableId} div table`).parentElement
              .scrollWidth + 500,
          behavior: "smooth",
        });
      }, 300);
    }}
    className="more-actions"
    action={
      <IconButton className="more-action-btn" aria-label="actions">
        <MoreHorizIcon />
      </IconButton>
    }
  >
    {children}
  </DropDownWrapper>
);

const mockData = Array(700)
  .fill("")
  .map((_, i) => ({
    name: {
      name: `James Aluko ${i}`,
      email: "email@mail.com",
    },
    number: "(405) 555-0128",
    email: `deanna${i}.curtis@example.com`,
    date: "01/01/2020",
    status: i % 2 === 0 ? "Active" : "Disabled",
    actions: (
      <>
        <button>Disable</button>
        <button>Enable</button>
      </>
    ),
    id: `row_${i}`,
  }));

// interface MockHeadCells  {
//   name: string;
//   label: string;
//   options: unknown;
// }

// const mockHeadCells: MockHeadCells[] = [
const mockHeadCells = [
  {
    name: "name",
    label: "Full Name",
    options: {
      customBodyRender: value => (
        <UserDisplay name={value.name} email={value.email} img="" />
      ),
    },
  },
  {
    name: "email",
    label: "Email Address",
  },
  {
    name: "number",
    label: "Phone Number",
  },
  {
    name: "date",
    label: "Date joined",
  },
  {
    name: "status",
    label: "Status",
    options: {
      customBodyRender: value => (
        <Chip
          label={value}
          color={value === "Active" ? "secondary" : "error"}
        />
      ),
    },
  },
  {
    name: "actions",
    label: "Actions",
    options: {
      customBodyRender: value => (
        <TableDropDown tableId={"table"}>{value}</TableDropDown>
      ),
    },
  },
];

function MyDataTable({
  headCells = mockHeadCells,
  options,
  customWidth,
  data = mockData,
  hideChipDot,
  title = "",
  alignLastTdRight = true,
  isLoading,
  isError,
  error,
  searchPlaceholder = "Search...",

  emptyData = {
    icon: QuestionMarkIcon,
    iconColor: "#3B3D3B",
    message: "No record found",
  },
  scrollX = true,
}) {
  if (isLoading) {
    return <LoadingTable />;
  }
  if (isError) {
    return <ErrorMsg error={error} />;
  }
  if (data.length <= 0)
    return (
      <EmptyResponse
        {...emptyData}
        iconBg="bg-none"
        icon={createElement(emptyData?.icon || QuestionMarkIcon, {
          width: 24,
          height: 24,
          color: emptyData?.iconColor || "#3B3D3B",
        })}
      />
    );
  return (
    <div
      id={"table"}
      className={`my-table ${hideChipDot ? "my-table-2" : ""} ${scrollX ? "scrollX" : ""
        }  ${customWidth && customWidth} ${alignLastTdRight ? "alignLastTdRight" : ""
        } `}
    >
      <MUIDataTable
        title={title}
        data={data}
        columns={headCells.map(({ name, label, showLabel = true, options }) => ({
          name,
          label,
          options: {
            filter: false,
            customHeadLabelRender: column => (showLabel ? label : ""),
            ...options,
          },
        }))}
        options={{
          download: false,
          print: false,
          caseSensitive: true,
          jumpToPage: true,
          searchAlwaysOpen: true,
          customSearchRender: (_, handleSearch) => (
            <div className="md:mb-4">
              <SearchInput
                placeholder={searchPlaceholder}
                onChange={e => handleSearch(e.target.value)}
              />
            </div>
          ),
          customSort: (data, colIndex, order) => {
            return data.sort((a, b) => {
              return (
                (a.data[colIndex].length < b.data[colIndex].length ? -1 : 1) *
                (order === "desc" ? 1 : -1)
              );
            });
          },
          responsive: "standard",
          elevation: 0,
          search: false,
          customSearch: (searchQuery, currentRow) => {
            let isFound = false;
            currentRow.forEach(col => {
              if (
                col?.name
                  ?.toString()
                  .toLowerCase()
                  .indexOf(searchQuery.toLowerCase()) >= 0 ||
                col
                  ?.toString()
                  .toLowerCase()
                  .indexOf(searchQuery.toLowerCase()) >= 0
              ) {
                isFound = true;
              }
            });
            return isFound;
          },
          enableNestedDataAccess: ".",
          rowsPerPageOptions: [5, 10, 15, 20, 100],
          rowsPerPage: 5,
          selectableRows: options?.selectableRows ? "multiple" : "none",
          ...options,
        }}
      />
    </div>
  );
}

export default MyDataTable;

