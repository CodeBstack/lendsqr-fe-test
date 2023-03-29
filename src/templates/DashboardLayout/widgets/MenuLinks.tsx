import BagdePercentIcon from '../../../Components/Vectors/BagdePercentIcon';
import BriefcaseIcon from '../../../Components/Vectors/BriefcaseIcon';
import ChartBarIcon from '../../../Components/Vectors/ChartBarIcon';
import ClipboardListIcon from '../../../Components/Vectors/ClipboardListIcon';
import CoinsSolidIcon from '../../../Components/Vectors/CoinsSolidIcon';
import GalaxyIcon from '../../../Components/Vectors/GalaxyIcon';
import HandHoldingIcon from '../../../Components/Vectors/HandHoldingIcon';
import HandshakeIcon from '../../../Components/Vectors/HandshakeIcon';
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
