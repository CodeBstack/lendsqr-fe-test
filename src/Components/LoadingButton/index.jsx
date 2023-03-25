import {LoadingButton} from "@mui/lab";
import {CircularProgress} from "@mui/material";
const LoadingBtn = ({
  children,
  variant,
  loading,
  indicator,
  iconColor,
  iconSize,
  ...props
}) => {
  return (
    <LoadingButton
      variant={variant || "contained"}
      loading={loading}
      loadingIndicator={
        indicator || (
          <CircularProgress
            size={iconSize || 24}
            sx={{color: iconColor || "#FFF"}}
          />
        )
      }
      {...props}
    >
      {children}
    </LoadingButton>
  );
};

export default LoadingBtn;
