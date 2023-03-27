interface GeneralDetailsProps {}

const GeneralDetails: React.FunctionComponent<
  GeneralDetailsProps
> = () => {
  return (
    <div className="">
      <div className="personal">
        <p className="font-medium text-base text-primary_200 ">
          Personal Information
        </p>

        <div className="py-[30px] border-b border-[#213F7D]/[0.1] grid gap-y-[30px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {Array(8)
            .fill('')
            .map((_, i) => (
              <div key={i}>
                <p className="font-normal uppercase text-xs text-primary_300">
                  full name
                </p>
                <p className="font-medium text-base text-primary_300">
                  Grace Effiom
                </p>
              </div>
            ))}
        </div>
      </div>
      <div className="education pt-[30px]">
        <p className="font-medium text-base text-primary_200 ">
          Education and Employment{' '}
        </p>

        <div className="py-[30px] border-b border-[#213F7D]/[0.1] grid gap-y-[30px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ">
          {Array(7)
            .fill('')
            .map((_, i) => (
              <div key={i}>
                <p className="font-normal uppercase text-xs text-primary_300">
                  full name
                </p>
                <p className="font-medium text-base text-primary_300">
                  Grace Effiom
                </p>
              </div>
            ))}
        </div>
      </div>{' '}
      <div className="socials pt-[30px]">
        <p className="font-medium text-base text-primary_200 ">
          Socials{' '}
        </p>

        <div className="py-[30px] border-b border-[#213F7D]/[0.1] grid gap-y-[30px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ">
          {Array(3)
            .fill('')
            .map((_, i) => (
              <div key={i}>
                <p className="font-normal uppercase text-xs text-primary_300">
                  full name
                </p>
                <p className="font-medium text-base text-primary_300">
                  Grace Effiom
                </p>
              </div>
            ))}
        </div>
      </div>
      <div className="guarantor pt-[30px]">
        <p className="font-medium text-base text-primary_200 ">
          Guarantor{' '}
        </p>

        <div className="py-[30px] grid gap-y-[30px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ">
          {Array(4)
            .fill('')
            .map((_, i) => (
              <div key={i}>
                <p className="font-normal uppercase text-xs text-primary_300">
                  full name
                </p>
                <p className="font-medium text-base text-primary_300">
                  Grace Effiom
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default GeneralDetails;
