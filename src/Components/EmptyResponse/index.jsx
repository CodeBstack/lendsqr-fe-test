import "./style.scss";
const EmptyResponse = ({
  image = "/images/emptyBox.svg",
  icon,
  message,
  extraText,
  iconBg,
  btn,
  ...props
}) => {
  return (
    <div {...props} className="empty-response-pg">
      {icon ? (
        <span className={`rounded-full icon-wrap ${iconBg || "bg-primary-100"}`}>{icon}</span>
      ) : (
        <img src={image} alt="no result" />
      )}
      <p className="title">{message}</p>
      <p className="mt-2 max-w-[300px] text-center">{extraText}</p>
      {btn && btn}
    </div>
  );
};

export default EmptyResponse;
