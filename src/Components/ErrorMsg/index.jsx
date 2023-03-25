import { Button } from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Link, useNavigate } from "react-router-dom";
import ErrorMascot from "../Vectors/ErrorMascot";

export function ErrorBoundaryFallback({ error, resetErrorBoundary }) {
  return (
    <>
      <section className="relative flex min-h-screen w-full items-center justify-center bg-grey_100 py-6 px-4 md:px-8">
        <div className="mb-12 flex min-h-[300px] w-full max-w-[600px] flex-col items-center justify-center rounded-2xl bg-grey_90 px-6 py-12 lg:rounded-[35px]">
          <ErrorMascot />
          <p className="font-Bai text-2xl font-semibold leading-[60px] tracking-[-4%] md:text-[40px]">
            Oops!
          </p>
          <p className="mt-2 text-center font-Mulish text-base font-[400] text-grey_30">
            Looks like the page you're trying to visit is broken <br />{" "}
            {error.message}
          </p>
          <div className="mt-10 w-full max-w-[270px] space-y-4">
            <Button variant="contained" fullWidth onClick={resetErrorBoundary}>
              Try again
            </Button>
            <Button variant="outlined" fullWidth component="a" href="/">
              Go Home
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
export default function ErrorMsg({ error }) {
  const navigate = useNavigate();

  return (
    <section className="relative flex w-full items-center justify-center py-6 px-4 md:px-8">
      <div className="mb-12 flex min-h-[200px] w-full max-w-[600px] flex-col items-center justify-center px-6 py-12 lg:rounded-[35px]">
        <ErrorMascot />
        <h3 className="font-Bai text-xl font-semibold leading-[60px] tracking-[-4%] md:text-[40px]">
          Oops, Error
        </h3>
        <p className="mt-2 text-center font-Mulish text-base font-[400] text-grey_30">
          {error.status === "FETCH_ERROR"
            ? "Please check your internet connection and try again..."
            : error.data.message}
        </p>
      </div>
      {error?.goBack && (
        <Button
          onClick={() => navigate("/admin/account")}
          endIcon={<ArrowForwardIosOutlinedIcon />}
          sx={{ p: "0.8rem !important", mt: 2 }}
          variant="outlined"
          size="small"
          color="error"
        >
          Go to my dashboard
        </Button>
      )}
    </section>
  );
}
