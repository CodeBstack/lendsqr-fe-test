function QuestionMarkIcon(props) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.3335 37.1996C12.8668 37.1996 12.3835 37.083 11.9501 36.8497C11.0001 36.3497 10.4168 35.3496 10.4168 34.283V31.9164C5.3835 31.3998 2.0835 27.6996 2.0835 22.3996V12.3997C2.0835 6.66641 5.9335 2.81641 11.6668 2.81641H28.3335C34.0668 2.81641 37.9168 6.66641 37.9168 12.3997V22.3996C37.9168 28.133 34.0668 31.983 28.3335 31.983H22.0501L14.9501 36.7165C14.4668 37.0331 13.9002 37.1996 13.3335 37.1996ZM11.6668 5.29972C7.36683 5.29972 4.5835 8.08306 4.5835 12.3831V22.3832C4.5835 26.6832 7.36683 29.4665 11.6668 29.4665C12.3502 29.4665 12.9168 30.0332 12.9168 30.7165V34.2665C12.9168 34.4832 13.0502 34.5831 13.1335 34.6331C13.2168 34.6831 13.3835 34.7331 13.5669 34.6164L20.9835 29.6832C21.1835 29.5498 21.4335 29.4665 21.6835 29.4665H28.3502C32.6502 29.4665 35.4335 26.6832 35.4335 22.3832V12.3831C35.4335 8.08306 32.6502 5.29972 28.3502 5.29972H11.6668V5.29972Z"
        fill={props.color || "#D61E34"}
      />
      <path
        d="M19.9995 20.1836C19.3162 20.1836 18.7495 19.6169 18.7495 18.9336V18.5837C18.7495 16.6503 20.1662 15.7003 20.6995 15.3336C21.3162 14.917 21.5162 14.6337 21.5162 14.2003C21.5162 13.367 20.8329 12.6836 19.9995 12.6836C19.1662 12.6836 18.4829 13.367 18.4829 14.2003C18.4829 14.8837 17.9162 15.4503 17.2329 15.4503C16.5496 15.4503 15.9829 14.8837 15.9829 14.2003C15.9829 11.9837 17.7829 10.1836 19.9995 10.1836C22.2162 10.1836 24.0162 11.9837 24.0162 14.2003C24.0162 16.1003 22.6162 17.0503 22.0995 17.4003C21.4495 17.8336 21.2495 18.117 21.2495 18.5837V18.9336C21.2495 19.6336 20.6829 20.1836 19.9995 20.1836Z"
        fill={props.color || "#D61E34"}
      />
      <path
        d="M20 24.333C19.3 24.333 18.75 23.7663 18.75 23.083C18.75 22.3997 19.3167 21.833 20 21.833C20.6833 21.833 21.25 22.3997 21.25 23.083C21.25 23.7663 20.7 24.333 20 24.333Z"
        fill={props.color || "#D61E34"}
      />
    </svg>
  );
}

export default QuestionMarkIcon;
