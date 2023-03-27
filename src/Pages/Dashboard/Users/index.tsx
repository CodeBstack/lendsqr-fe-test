import { useState, useEffect } from 'react';
import EnhancedTable from '../../../Components/TableComponent/MyDataTable';
import MyDataTable from '../../../Components/TableComponent/MyDataTable';
import LoanIcon2 from '../../../Components/Vectors/LoanIcon2';
import MoneyIcon from '../../../Components/Vectors/MoneyIcon';
import UserIcon2 from '../../../Components/Vectors/UserIcon2';
import UserIcon3 from '../../../Components/Vectors/UserIcon3';
import { DataProps } from '../../../Services/model';
import DashboardLayout from '../../../templates/DashboardLayout/DashboardLayout';
import DashboardBox from '../../../templates/DashboardLayout/widgets/DashboardBox';

interface DashboardProps {}

const Users: React.FunctionComponent<
  DashboardProps
> = () => {
  const [data, setData] = useState<DataProps[]>(
    []
  );
  const [loading, setLoading] =
    useState<boolean>(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/`
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
  return (
    <DashboardLayout
      isLoading={loading}
      error={error}
    >
      <main className="">
        <h4 className="font-medium text-2xl text-primary_200 mb-6 md:mb-10">
          Users
        </h4>

        <div className="mb-10 grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <DashboardBox
            icon={<UserIcon3 />}
            iconBg="bg-[#DF18FF]"
            value="2,453"
            text="Users"
          />
          <DashboardBox
            icon={<UserIcon2 />}
            iconBg="bg-[#5718FF]"
            value="2,453"
            text="Active Users"
          />
          <DashboardBox
            icon={<LoanIcon2 />}
            iconBg="bg-[#F55F44]"
            value="12,453"
            text="Users with loans"
          />
          <DashboardBox
            icon={<MoneyIcon />}
            iconBg="bg-[#FF3366]"
            value="102,453"
            text="Users with savings"
          />
        </div>

        <EnhancedTable data={data} />
      </main>
    </DashboardLayout>
  );
};

export default Users;
