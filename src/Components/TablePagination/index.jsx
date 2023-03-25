import { MenuItem, Pagination, Select } from "@mui/material";
import "./style.scss";

function TablePagination({
  meta: { totalPages = 10, currentPage = 1, rowCount, totalCount = 200 },
  page,
  setPage,
  setPerPage = () => { },
  perPage = 4,
}) {
  return (
    <>
      <div className="pagination-wrap gap-4">
        <p className="rounded-xl border-2 border-grey_70 bg-grey_90 p-4">
          Showing 1 - {perPage} out of {totalCount}
        </p>

        <div className="flex flex-wrap items-center gap-4 rounded-xl border-2 border-grey_70 bg-grey_90 px-4 py-2 sm:justify-end">
          <div className="flex items-center gap-3 ">
            <Select
              value={perPage}
              onChange={(e) => {
                setPerPage(e.target.value);
              }}
            >
              <MenuItem value={"4"} className="center">
                4
              </MenuItem>
              <MenuItem value={"8"} className="center">
                8
              </MenuItem>
              <MenuItem value={"12"} className="center">
                12
              </MenuItem>
              <MenuItem value={"16"} className="center">
                16
              </MenuItem>
            </Select>
            <p>Rows per page</p>
          </div>
          <Pagination
            color="primary"
            count={totalPages}
            defaultPage={currentPage}
            page={page}
            onChange={(e, val) => setPage(val)}
            variant="text"
            shape="rounded"
            siblingCount={0}
          />
        </div>
      </div>
    </>
  );
}

export default TablePagination;
