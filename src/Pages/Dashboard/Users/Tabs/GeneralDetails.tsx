import { DataProps } from '../../../../features/model';

interface GeneralDetailsProps {
  data?: DataProps;
}

const GeneralDetails = ({
  data,
}: GeneralDetailsProps) => {
 
  const personalInformationObj = [
    {
      label: 'Full name',
      value: `${data?.profile.firstName}`,
      value2: `${data?.profile.lastName}`,
    },
    {
      label: 'phone number',
      value: `${data?.profile.phoneNumber}`,
    },
    {
      label: 'email',
      value: `${data?.email}`,
    },
    {
      label: 'bvn',
      value: `368681174`,
    },
    {
      label: 'gender',
      value: `${data?.profile.gender}`,
    },
    {
      label: 'marital status',
      value: `Single`,
    },
    {
      label: 'children',
      value: `None`,
    },
    {
      label: 'Type of residence',
      value: "Parent's apartment",
    },
  ];
  const EducObj = [
    {
      label: 'level of education',
      value: `${
        data?.education.level === 'Bsc'
          ? 'B.Sc'
          : data?.education.level
      }`,
    },
    {
      label: 'employment status',
      value: `${data?.education.employmentStatus}`,
    },
    {
      label: 'sector of employment',
      value: `${data?.education.sector}`,
    },
    {
      label: 'duration of employment',
      value: `${data?.education.duration}`,
    },
    {
      label: 'office email',
      value: `${data?.education.officeEmail}`,
    },
    {
      label: 'monthly income',
      value: `₦169.47`,
      value2: `- ₦618.34`,
    },
    {
      label: 'loan repayment',
      value: `₦40,000`,
    },
  ];

  const socialObj = [
    {
      label: 'twitter',
      value: `${data?.socials.twitter}`,
    },
    {
      label: 'facebook',
      value: `${data?.socials.facebook}`,
    },
    {
      label: 'instagram',
      value: `${data?.socials.instagram}`,
    },
  ];

  const guarantorObj = [
    {
      label: 'Full name',
      value: `${data?.guarantor.firstName}`,
      value2: `${data?.guarantor.lastName}`,
    },
    {
      label: 'phone number',
      value: `${data?.guarantor.phoneNumber}`,
    },
    {
      label: 'email',
      value: `${data?.email}`,
    },
    {
      label: 'relationship',
      value: 'Sister',
    },
  ];

  return (
    <div className="">
      <div className="personal">
        <p className="font-medium text-base text-primary_200 ">
          Personal Information
        </p>

        <div className="py-[30px] border-b border-[#213F7D]/[0.1] grid gap-x-4 gap-y-[30px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {personalInformationObj.map(
            (eachInfo, i) => (
              <div key={i}>
                <p className="font-normal  uppercase text-xs text-primary_300">
                  {eachInfo.label}
                </p>
                <p className="font-medium break-words text-base text-primary_300">
                  {eachInfo.value}{' '}
                  {eachInfo.value2 &&
                    eachInfo.value2}
                </p>
              </div>
            )
          )}
        </div>
      </div>
      <div className="education pt-[30px]">
        <p className="font-medium text-base text-primary_200 ">
          Education and Employment{' '}
        </p>

        <div className="py-[30px] border-b border-[#213F7D]/[0.1] grid gap-x-4 gap-y-[30px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ">
          {EducObj.map((eachInfo, i) => (
            <div key={i}>
              <p className="font-normal  uppercase text-xs text-primary_300">
                {eachInfo.label}
              </p>
              <p className="font-medium text-base break-words text-primary_300">
                {eachInfo.value} {eachInfo.value2}
              </p>
            </div>
          ))}
        </div>
      </div>{' '}
      <div className="socials pt-[30px]">
        <p className="font-medium text-base text-primary_200 ">
          Socials{' '}
        </p>

        <div className="py-[30px] border-b border-[#213F7D]/[0.1] grid gap-x-4 gap-y-[30px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ">
          {socialObj.map((eachInfo, i) => (
            <div key={i}>
              <p className="font-normal  uppercase text-xs text-primary_300">
                {eachInfo.label}{' '}
              </p>
              <p className="font-medium text-base break-words text-primary_300">
                {eachInfo.value}{' '}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="guarantor pt-[30px]">
        <p className="font-medium text-base text-primary_200 ">
          Guarantor{' '}
        </p>

        <div className="py-[30px] grid gap-x-4 gap-y-[30px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ">
          {guarantorObj.map((eachInfo, i) => (
            <div key={i}>
              <p className="font-normal  uppercase text-xs text-primary_300">
                {eachInfo.label}{' '}
              </p>
              <p className="font-medium text-base break-words text-primary_300">
                {eachInfo.value}{' '}
                {eachInfo.value2 &&
                  eachInfo.value2}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeneralDetails;
