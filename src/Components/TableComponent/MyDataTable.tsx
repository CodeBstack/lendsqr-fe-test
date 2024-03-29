import * as React from 'react';
import './style.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';
import FilterListIcon from '@mui/icons-material/FilterList';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  Chip,
  IconButton,
  Paper,
} from '@mui/material';
import DropDownWrapper from '../DropDownWrapper';
import { Link } from 'react-router-dom';
import ViewIcon from '../Vectors/ViewIcon';
import DeleteFriendIcon from '../Vectors/DeleteFriendIcon';
import ActivateFriendIcon from '../Vectors/ActivateFriendIcon';
import { DataProps } from '../../features/model';
import moment from 'moment';

interface HeadCell {
  id: string;
  label: string;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'organization',
    label: 'ORGANIZATION',
  },
  {
    id: 'username',
    label: 'USERNAME',
  },
  {
    id: 'email',
    label: 'EMAIL',
  },
  {
    id: 'number',
    label: 'PHONE NUMBER',
  },
  {
    id: 'date',
    label: 'DATE JOINED',
  },
  {
    id: 'status',
    label: 'STATUS',
  },
];

interface EnhancedTableProps {
  rowCount: number;
  showFilterDropdown: boolean;
  setshowFilterDropdown: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

function EnhancedTableHead(
  props: EnhancedTableProps
) {
  const {
    rowCount,
    showFilterDropdown,
    setshowFilterDropdown,
  } = props;

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell, i) => (
          <TableCell key={i}>
            {headCell.label}

            <Tooltip title="Filter list">
              <IconButton
                onClick={() =>
                  setshowFilterDropdown(
                    !showFilterDropdown
                  )
                }
              >
                <FilterListIcon />
              </IconButton>
            </Tooltip>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableProps2 {
  data: DataProps[];
}

export default function EnhancedTable({
  data,
}: EnhancedTableProps2) {
  const [
    showFilterDropdown,
    setshowFilterDropdown,
  ] = React.useState<boolean>(false);

  const [page, setPage] = React.useState(0);

  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] =
    React.useState(9);

  const mockData = data?.map((eachData, i) => ({
    organization: `${eachData.orgName
      .split('-')
      .join(' ')}`,
    username: `${eachData.userName}`,
    email: `${eachData.email}`,
    number: `${eachData.phoneNumber}`,
    date: `${moment(
      `${eachData.createdAt}`
    ).format('lll')}`,
    status: (
      <Chip
        label={
          i % 2 === 0 ? 'Inactive' : 'BlackList'
        }
        color={i % 2 === 0 ? 'error' : 'error'}
      />
    ),
    actions: (
      <>
        <DropDownWrapper
          position="right"
          className="more-actions"
          action={
            <IconButton
              className="more-action-btn"
              aria-label="actions"
            >
              <MoreVertIcon />
            </IconButton>
          }
        >
          <div className="w-full font-medium text-sm divide-x text-primary_300 h-full p-3">
            <Link
              to={`/dashboard/users/${eachData.id}`}
              className="flex items-center gap-2 "
            >
              <ViewIcon /> View Details
            </Link>
            <button className="flex items-center gap-2 py-3 ">
              <DeleteFriendIcon /> Blacklist User
            </button>
            <button className="flex items-center gap-2 ">
              <ActivateFriendIcon /> Activate User
            </button>
          </div>
        </DropDownWrapper>
      </>
    ),
    id: `row_${i}`,
  }));

  const handleChangePage = (
    event: unknown,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(
      parseInt(event.target.value, 10)
    );
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0
      ? Math.max(
          0,
          (1 + page) * rowsPerPage -
            mockData.length
        )
      : 0;

  return (
    <div
      id={'table'}
      className={`my-table 
      scrollX relative
      `}
    >
      <Paper
        sx={{
          width: '100%',
          mb: 2,
          padding: '30px',
        }}
      >
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              rowCount={mockData.length}
              showFilterDropdown={
                showFilterDropdown
              }
              setshowFilterDropdown={
                setshowFilterDropdown
              }
            />
            <TableBody>
              {mockData
                .slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
                .map((row, index) => {
                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={index}
                      sx={{ cursor: 'pointer' }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        padding="none"
                        sx={{
                          textTransform:
                            'capitalize',
                        }}
                      >
                        {row.organization}
                      </TableCell>
                      <TableCell>
                        {row.username}
                      </TableCell>
                      <TableCell>
                        {row.email}
                      </TableCell>
                      <TableCell>
                        {row.number}
                      </TableCell>
                      <TableCell>
                        {row.date}
                      </TableCell>
                      <TableCell>
                        {row.status}
                      </TableCell>
                      <TableCell>
                        {row.actions}
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height:
                      (dense ? 33 : 53) *
                      emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[9, 18, 27]}
          component="div"
          count={mockData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={
            handleChangeRowsPerPage
          }
        />
      </Paper>

      {showFilterDropdown && <FilterDropdown />}
    </div>
  );
}

const FilterDropdown = () => {
  return (
    <form className="form-dropdown">
      <div>
        <label htmlFor="organization">
          Organization
        </label>
        <select
          id="organization"
          name="organization"
          placeholder="Select"
        >
          <option value="select">Select</option>
        </select>
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          placeholder="User"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          placeholder="Email"
          type="email"
        />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          placeholder="Date"
          type="date"
        />
      </div>
      <div>
        <label htmlFor="number">
          Phone Number
        </label>
        <input
          id="number"
          placeholder="Phone Number"
          type="number"
        />
      </div>
      <div>
        <label htmlFor="organization">
          Organization
        </label>
        <select
          id="organization"
          name="organization"
          placeholder="Select"
        >
          <option value="select">Select</option>
        </select>
      </div>
      <br />
      <div className="form-btns">
        <button type="reset">Reset</button>
        <br />
        <button
          // onClick={[Function]}
          type="submit"
        >
          Filter
        </button>
      </div>
    </form>
  );
};

// import MUIDataTable, {
//   MUIDataTableColumnOptions,
// } from 'mui-datatables';
// import UserDisplay from './UserDisplay';
// // import './style.scss';
// import LoadingTable from './LoadingTable';
// import ErrorMsg from '../ErrorMsg';
// import { Chip, IconButton } from '@mui/material';
// import DropDownWrapper from '../DropDownWrapper';
// import EmptyResponse from '../EmptyResponse';
// import QuestionMarkIcon from '../Vectors/QuestionMarkIcon';
// import { createElement, ReactNode } from 'react';
// import InputField from '../InputField';
// import SearchIcon from '@mui/icons-material/Search';
// // import { ErrorType } from 'services/api.types';
// // import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
// // import { SerializedError } from '@reduxjs/toolkit';

export const TableDropDown = ({
  children,
  tableId = 'my-table',
}: {
  children: React.ReactNode;
  tableId?: string;
}) => (
  <DropDownWrapper
    // extraClick={() => {
    //   setTimeout(() => {
    //     let tableEl = document?.querySelector(
    //       `#${tableId} div table`
    //     )?.parentElement as HTMLDivElement;
    //     if (tableEl) {
    //       tableEl.scroll({
    //         top: tableEl.scrollHeight + 500,
    //         left: tableEl.scrollWidth + 500,
    //         behavior: 'smooth',
    //       });
    //     }
    //   }, 300);
    // }}
    className="more-actions"
    action={
      <IconButton
        className="more-action-btn"
        aria-label="actions"
      >
        <MoreVertIcon />
      </IconButton>
    }
  >
    <div className="w-full divide-x text-primaryDark h-full p-2">
      {children}
    </div>
  </DropDownWrapper>
);

// const mockData = Array(700)
//   .fill('')
//   .map((_, i) => ({
//     name: {
//       name: `James Aluko ${i}`,
//       email: 'email@mail.com',
//     },
//     number: '(405) 555-0128',
//     email: `deanna${i}.curtis@example.com`,
//     date: '01/01/2020',
//     status: i % 2 === 0 ? 'Active' : 'Disabled',
//     actions: (
//       <>
//         <button>Disable</button>
//         <button>Enable</button>
//       </>
//     ),
//     id: `row_${i}`,
//   }));

// const mockHeadCells = [
//   {
//     name: 'name',
//     label: 'Full Name',
//     options: {
//       customBodyRender: (value: any) => (
//         <UserDisplay
//           name={value.name}
//           email={value.email}
//           img=""
//         />
//       ),
//     },
//   },
//   {
//     name: 'email',
//     label: 'Email Address',
//   },
//   {
//     name: 'number',
//     label: 'Phone Number',
//   },
//   {
//     name: 'date',
//     label: 'Date joined',
//   },
//   {
//     name: 'status',
//     label: 'Status',
//     options: {
//       customBodyRender: (value: string) => (
//         <Chip
//           label={value}
//           color={
//             value === 'Active'
//               ? 'success'
//               : 'error'
//           }
//         />
//       ),
//     },
//   },
//   {
//     name: 'actions',
//     label: 'Actions',
//     options: {
//       customBodyRender: (value: any) => (
//         <TableDropDown tableId={'table'}>
//           {value}
//         </TableDropDown>
//       ),
//     },
//   },
// ];

// type Props = {
//   headCells?: {
//     label?: string | undefined;
//     name: string;
//     options?:
//       | MUIDataTableColumnOptions
//       | undefined;
//     showLabel?: boolean;
//   }[];
//   isLoading?: Boolean;
//   isError?: Boolean;
//   showPagination?: Boolean;
//   // error?:
//   //   | ErrorType
//   //   | FetchBaseQueryError
//   //   | SerializedError
//   //   | undefined
//   //   | string;
//   scrollX?: Boolean;
//   scrollY?: Boolean;
//   maxHeight?: string;
//   data?:
//     | (object | string[] | number[])[]
//     | undefined;
//   options?: any;
//   alignLastTdRight?: boolean;
//   // emptyData?: EmptyResponseProps;
//   title?: string;
// };

// function MyDataTable({
//   headCells = mockHeadCells,
//   options,
//   data = mockData,
//   title = '',
//   alignLastTdRight = true,
//   isLoading,
//   isError,
//   // error,
//   // emptyData = {
//   //   message: 'No record found',
//   // },
//   scrollX = true,
// }: Props) {
//   if (isLoading) {
//     return <LoadingTable />;
//   }
//   // if (isError) {
//   //   return <ErrorMsg error={error} />;
//   // }
//   return (
// <div
//   id={'table'}
//   className={`my-table ${
//     scrollX ? 'scrollX' : ''
//   } ${
//     alignLastTdRight ? 'alignLastTdRight' : ''
//   } `}
// >
//       <MUIDataTable
//         title={title}
//         data={data}
//         columns={headCells.map(
//           ({
//             name,
//             label,
//             showLabel = true,
//             options,
//           }) => ({
//             name,
//             label,
//             options: {
//               filter: true,
//               customHeadLabelRender: (column) =>
//                 showLabel ? label : '',
//               ...options,
//             },
//           })
//         )}
//         options={{
//           download: false,
//           print: false,
//           caseSensitive: true,
//           jumpToPage: true,
//           searchAlwaysOpen: false,
//           customSearchRender: (
//             _,
//             handleSearch: any
//           ) => (
//             <div className="md:mb-4 max-w-[280px]">
//               <InputField
//                 // prefix={
//                 //   <SearchIcon
//                 //     sx={{
//                 //       color: '#858C94',
//                 //       ml: 1,
//                 //     }}
//                 //   />
//                 // }
//                 // className="max-w-[420px] w-full"
//                 // spaceY={false}
//                 placeholder={'Search...'}
//                 // onChange={(e) =>
//                 //   handleSearch(e.target.value)
//                 // }
//               />
//             </div>
//           ),
//           customSort: (data, colIndex, order) => {
//             return data.sort((a, b) => {
//               return (
//                 (a.data[colIndex].length <
//                 b.data[colIndex].length
//                   ? -1
//                   : 1) *
//                 (order === 'desc' ? 1 : -1)
//               );
//             });
//           },
//           responsive: 'standard',
//           elevation: 0,
//           search: false,
//           customSearch: (
//             searchQuery,
//             currentRow
//           ) => {
//             let isFound = false;
//             currentRow.forEach((col) => {
//               if (
//                 col?.name
//                   ?.toString()
//                   .toLowerCase()
//                   .indexOf(
//                     searchQuery.toLowerCase()
//                   ) >= 0 ||
//                 col
//                   ?.toString()
//                   .toLowerCase()
//                   .indexOf(
//                     searchQuery.toLowerCase()
//                   ) >= 0
//               ) {
//                 isFound = true;
//               }
//             });
//             return isFound;
//           },
//           enableNestedDataAccess: '.',
//           rowsPerPageOptions: [
//             5, 10, 15, 20, 100,
//           ],
//           selectableRows: options?.selectableRows
//             ? true
//             : false,
//           textLabels: {
//             body: {
//               noMatch: (
//                 <EmptyResponse
//                   iconBg="bg-none"
//                   icon={createElement(
//                     QuestionMarkIcon,
//                     {
//                       width: 100,
//                       height: 100,
//                       color: '#acacb4',
//                     }
//                   )}
//                   // {...emptyData}
//                 />
//               ),
//             },
//           },
//           ...options,
//         }}
//       />
//     </div>
//   );
// }

// export default MyDataTable;
