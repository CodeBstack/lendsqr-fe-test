import React, {
  useEffect,
  useState,
} from 'react';
import {
  useNavigate,
  useParams,
} from 'react-router-dom';
import BackIcon from '../../../Components/Vectors/BackIcon';
import UserProfileIcon from '../../../Components/Vectors/UserProfileIcon';
import DashboardLayout from '../../../templates/DashboardLayout/DashboardLayout';
import StarIcon from '@mui/icons-material/Star';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import GeneralDetails from './Tabs/GeneralDetails';
import Document from './Tabs/Document';
import BankDetails from './Tabs/BankDetails';
import Loans from './Tabs/Loans';
import Savings from './Tabs/Savings';
import AppsAndSystem from './Tabs/AppsAndSystem';
import { DataProps } from '../../../Services/model';

const EachUser = () => {
  const [presentStep, setPresentStep] =
    useState<number>(1);
  const [data, setData] =
    React.useState<DataProps>();
  const { id } = useParams();

  const [loading, setLoading] =
    useState<boolean>(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
    )
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);


  interface StepComponents {
    1: JSX.Element;
    2: JSX.Element;
    3: JSX.Element;
    4: JSX.Element;
    5: JSX.Element;
    6: JSX.Element;
  }

  let stepComponents: StepComponents = {
    1: <GeneralDetails myId={id} />,
    2: <Document />,
    3: <BankDetails />,
    4: <Loans />,
    5: <Savings />,
    6: <AppsAndSystem />,
  };
  return (
    <DashboardLayout isLoading={loading} error={error}>
      <main>
        <BackBtn />

        <div className="flex justify-between flex-wrap gap-4 mt-8 items-center">
          <h4 className="font-medium text-2xl text-primary_200">
            User Details
          </h4>

          <div className="flex gap-5 items-center">
            <button className="bg-grey transition-all duration-100 border uppercase rounded-[8px] font-semibold text-sm px-4 py-3 text-[#E4033B] border-[#E4033B]">
              Blacklist User
            </button>
            <button className="bg-grey transition-all duration-100 border uppercase rounded-[8px] font-semibold text-sm px-4 py-3 text-[#39CDCC] border-[#39CDCC]">
              Activate User
            </button>
          </div>
        </div>

        <div className="rounded-[4px] bg-white mt-10 p-4 md:p-[30px] !pb-0">
          <div className="flex flex-wrap gap-y-4">
            <div className="flex gap-5 items-center border-r border-primary_300/[0.2] pr-[30px]">
              {data?.profile.avatar ? (
                <img
                  src={data?.profile.avatar}
                  alt={data?.userName}
                  className="rounded-full w-[100px] h-[100px]"
                />
              ) : (
                <div className="rounded-full bg-primary_200 bg-opacity-[0.16] w-[100px] h-[100px] flex justify-center items-center">
                  <UserProfileIcon />
                </div>
              )}
              <div>
                <p className="font-medium text-primary_200 text-xl md:text-2xl">
                  {data?.profile.firstName}{' '}
                  {data?.profile.lastName}
                </p>
                <p className="font-normal text-primary_300 text-sm">
                  {data?.userName}
                </p>
              </div>
            </div>

            <div className="px-[30px] border-r border-primary_300/[0.2]  flex flex-col justify-center items-center ">
              <p className="font-medium mb-2 text-primary_300 text-sm">
                User’s Tier
              </p>

              <div className="flex gap-1 items-center">
                <StarIcon
                  fontSize="small"
                  sx={{ color: '#E9B200' }}
                />
                <StarBorderOutlinedIcon
                  fontSize="small"
                  sx={{ color: '#E9B200' }}
                />
                <StarBorderOutlinedIcon
                  fontSize="small"
                  sx={{ color: '#E9B200' }}
                />
              </div>
            </div>

            <div className="pl-[30px] flex flex-col justify-center items-center">
              <p className="font-medium text-primary_200 text-xl md:text-2xl">
                ₦{data?.accountBalance}
              </p>
              <p className="font-normal mb-2 text-primary_200 text-xs">
                {data?.accountNumber}/Providus
                Bank{' '}
              </p>
            </div>
          </div>

          <div className="flex gap-4 md:gap-8 items-center noScrollBar overflow-x-auto flex-nowrap mt-16">
            {steps.map((value) => (
              <button
                key={value.id}
                type="button"
                onClick={() =>
                  setPresentStep(value.id)
                }
                className="flex min-w-fit"
              >
                <span
                  className={` px-6 pb-1 text-[16px] font-medium  ${
                    presentStep === value.id
                      ? 'border-b-[2px] border-[#39CDCC] text-[#39CDCC]'
                      : 'text-[black]'
                  } `}
                >
                  {value.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[4px] bg-white mt-[30px] p-4 md:p-[30px]">
          <div className="w-full">
            {
              stepComponents[
                presentStep as keyof StepComponents
              ]
            }
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default EachUser;
const steps = [
  {
    title: 'General Details',
    id: 1,
  },
  {
    title: 'Documents',
    id: 2,
  },

  {
    title: 'Bank Details',
    id: 3,
  },
  {
    title: 'Loans',
    id: 4,
  },
  {
    title: 'Savings',
    id: 5,
  },
  {
    title: 'Apps and System',
    id: 6,
  },
];
const BackBtn = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate('/dashboard/users')}
      className="flex gap-3.5 items-center"
    >
      <BackIcon />
      <p className="font-normal text-primary_300 text-base">
        Back to Users
      </p>
    </button>
  );
};
