import BagdePercentIcon from '../../../Components/Vectors/BagdePercentIcon';
import BriefcaseIcon from '../../../Components/Vectors/BriefcaseIcon';
import ChartBarIcon from '../../../Components/Vectors/ChartBarIcon';
import ClipboardListIcon from '../../../Components/Vectors/ClipboardListIcon';
import CoinsSolidIcon from '../../../Components/Vectors/CoinsSolidIcon';
import GalaxyIcon from '../../../Components/Vectors/GalaxyIcon';
import HandHoldingIcon from '../../../Components/Vectors/HandHoldingIcon';
import HandshakeIcon from '../../../Components/Vectors/HandshakeIcon';
import HomeIcon from '../../../Components/Vectors/HomeIcon';
import MoneySackIcon from '../../../Components/Vectors/MoneySackIcon';
import NpBankIcon from '../../../Components/Vectors/NpBankIcon';
import PiggyBankIcon from '../../../Components/Vectors/PiggyBankIcon';
import ScrollIcon from '../../../Components/Vectors/ScrollIcon';
import SlidersIcon from '../../../Components/Vectors/SlidersIcon';
import TxnIcon from '../../../Components/Vectors/TxnIcon';
import UserCheckIcon from '../../../Components/Vectors/UserCheckIcon';
import UserCogIcon from '../../../Components/Vectors/UserCogIcon';
import UserFriendsIcon from '../../../Components/Vectors/UserFriendsIcon';
import UsersIcon from '../../../Components/Vectors/UsersIcon';
import UserTimesIcon from '../../../Components/Vectors/UserTimesIcon';
// import UserCircleIcon from "components/Vectors/user-circle";
// import UserIcon from "components/Vectors/user";
// import CreditCardIcon from "components/Vectors/credit-card";
// import TicketIcon from "components/Vectors/ticket";
// import JobIcon from "components/Vectors/JobIcon";
// import EngagementIcon from "components/Vectors/EngagementIcon";
// import JobRequestsIcon from "components/Vectors/JobRequestsIcon";
// import TokenIcon from "components/Vectors/TokenIcon";
// import ShieldTickIcon from "components/Vectors/ShieldTickIcon";
// import BellIcon from "components/Vectors/BellIcon";

// import LogoIcon from '../../../Components/Vectors/LogoIcon';

interface Links {
  icon: React.FC;
  name: string;
  link: string;
}

const MenuLinks: Links[] = [
  {
    icon: UserFriendsIcon,
    name: 'Users',
    link: 'users',
  },
  {
    icon: UsersIcon,
    name: 'Guarantors',
    link: 'guarantors',
  },
  {
    icon: MoneySackIcon,
    name: 'Loans',
    link: 'loans',
  },
  {
    icon: HandshakeIcon,
    name: 'Decision Models',
    link: 'decision-models',
  },
  {
    icon: PiggyBankIcon,
    name: 'Savings',
    link: 'savings',
  },
  {
    icon: HandHoldingIcon,
    name: 'Loan Requests',
    link: 'loan-requests',
  },
  {
    icon: UserCheckIcon,
    name: 'Whitelist',
    link: 'whitelist',
  },
  {
    icon: UserTimesIcon,
    name: 'Karma',
    link: 'karma',
  },
  {
    icon: BriefcaseIcon,
    name: 'Organization',
    link: 'organization',
  },
  {
    icon: HandHoldingIcon,
    name: 'Loan Products',
    link: 'loan-products',
  },
  {
    icon: NpBankIcon,
    name: 'Savings Products',
    link: 'savings-products',
  },
  {
    icon: CoinsSolidIcon,
    name: 'Fees and Charges',
    link: 'fess-charges',
  },
  {
    icon: TxnIcon,
    name: 'Transactions',
    link: 'txns',
  },
  {
    icon: GalaxyIcon,
    name: 'Services',
    link: 'services',
  },
  {
    icon: UserCogIcon,
    name: 'Service Account',
    link: 'service-account',
  },
  {
    icon: ScrollIcon,
    name: 'Settlements',
    link: 'settlements',
  },
  {
    icon: ChartBarIcon,
    name: 'Reports',
    link: 'reports',
  },
  {
    icon: SlidersIcon,
    name: 'Preferences',
    link: 'preferences',
  },
  {
    icon: BagdePercentIcon,
    name: 'Fees and Pricing',
    link: 'fees-pricing',
  },
  {
    icon: ClipboardListIcon,
    name: 'Audit Logs',
    link: 'audit',
  },
];

export default MenuLinks;
