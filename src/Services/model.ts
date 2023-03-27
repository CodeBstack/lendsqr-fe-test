export interface DataProps {
  accountBalance: string;
  accountNumber: string;
  createdAt: string;
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
  };
  email: string;
  guarantor: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
  };
  id: string;
  lastActiveDate: string;
  orgName: string;
  phoneNumber: string;
  profile: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatar: string;
    gender: string;
  };
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  userName: string;
}
