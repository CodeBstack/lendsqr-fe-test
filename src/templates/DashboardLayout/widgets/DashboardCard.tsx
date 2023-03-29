interface Props {
  icon?: JSX.Element;
  iconBg?: string;
  bg?: string;
  value?: string;
  text?: string;
  stats?: string;
}

const DashboardCard = ({
  icon,
  iconBg,
  bg,
  value,
  text,
}: Props) => {
  return (
    <div
      className={`box flex  flex-col justify-cente rounded-[4px] dashboard_box_shadow  border border-[#213F7D0F] px-[30px] pb-[30px] pt-[20px] ${
        bg || 'bg-white'
      }`}
    >
      <span
        className={`bg-opacity-10 mb-[2px] icon-box flex h-[40px] w-[40px] items-center justify-center rounded-full ${
          iconBg || 'bg-white'
        }`}
      >
        {icon}
      </span>
      <div className="stats my-[12px]">
        <p className="text-sm  font-medium text-primary_300">
          {text?.toUpperCase()}
        </p>
      </div>
      {value && (
        <h4 className="text-2xl font-semibold text-primary_200">
          {value}
        </h4>
      )}
    </div>
  );
};

export default DashboardCard;
