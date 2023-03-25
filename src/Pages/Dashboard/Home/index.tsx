import DashboardLayout from '../../../templates/DashboardLayout/DashboardLayout';

interface DashboardProps {}

const Dashboard: React.FunctionComponent<
  DashboardProps
> = () => {
  return (
    <DashboardLayout>
      <main className="md:flex justify-center items-center w-full h-full text-center">
        <h1 className="font-medium text-2xl md:text-4xl text-primary_200 mb-6 md:mb-10">
          WELCOME TO THE DASHBOARD <br /> KINDLY NAVIGATE
          TO THE USERS PAGE
        </h1>
      </main>
    </DashboardLayout>
  );
};

export default Dashboard;
