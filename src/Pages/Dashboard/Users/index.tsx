import DashboardLayout from '../../../templates/DashboardLayout/DashboardLayout';
import DashboardCard from '../../../templates/DashboardLayout/widgets/DashboardCard';

import EnhancedTable from '../../../Components/TableComponent/MyDataTable';

import LoanIcon2 from '../../../Components/Vectors/LoanIcon2';
import MoneyIcon from '../../../Components/Vectors/MoneyIcon';
import UserIcon2 from '../../../Components/Vectors/UserIcon2';
import UserIcon3 from '../../../Components/Vectors/UserIcon3';

import { useGetAllUsersQuery } from '../../../features/apiSlice';

interface DashboardProps {}

const Users: React.FunctionComponent<
  DashboardProps
  > = () => {
  
  const { data: allUsers, isLoading } =
    useGetAllUsersQuery<any>();

  return (
    <DashboardLayout isLoading={isLoading}>
      <main className="">
        <h4 className="font-medium text-2xl text-primary_200 mb-6 md:mb-10">
          Users
        </h4>

        <div className="mb-10 grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <DashboardCard
            icon={<UserIcon3 />}
            iconBg="bg-[#DF18FF]"
            value="2,453"
            text="Users"
          />
          <DashboardCard
            icon={<UserIcon2 />}
            iconBg="bg-[#5718FF]"
            value="2,453"
            text="Active Users"
          />
          <DashboardCard
            icon={<LoanIcon2 />}
            iconBg="bg-[#F55F44]"
            value="12,453"
            text="Users with loans"
          />
          <DashboardCard
            icon={<MoneyIcon />}
            iconBg="bg-[#FF3366]"
            value="102,453"
            text="Users with savings"
          />
        </div>

        <EnhancedTable data={allUsers} />
      </main>
    </DashboardLayout>
  );
};

export default Users;
