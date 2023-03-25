import CustomLink from '../../Components/CustomRouteLink';
import { createElement, useState } from 'react';
import './style.scss';
import LogoIcon from '../../Components/Vectors/LogoIcon';
import MenuLinks from './widgets/MenuLinks';
import {
  Badge,
  IconButton,
  Tooltip,
} from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Link, Outlet } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import UserDisplay from '../../Components/TableComponent/UserDisplay';
import HomeIcon from '../../Components/Vectors/HomeIcon';
import BriefcaseIcon from '../../Components/Vectors/BriefcaseIcon';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import IsolatedLogoIcon from '../../Components/Vectors/IsolatedLogoIcon';
import InputField2 from '../../Components/SearchInput';

type Props = {
  type?: string;
  children?: React.ReactNode;
  title?: string;
  showSearchBar?: boolean;
  isLoading?: boolean;
  overflow_Y_hidden?: boolean;
};

function DashboardLayout({
  type = 'dashboard',
  children,
  title,
}: Props) {
  const [isSideBarOpen, setIsSideBarOpen] =
    useState(false);
  return (
    <div className="DashboardLayout flex max-h-screen items-stretch overflow-hidden bg-[#e5e5e5] px3 py-0 md:pl6 lg:py6">
      {/* main */}

      <aside
        className={`font-WorkSans scrollbar-style white-scrollbar fixed top-0 pt-20 lg:pt-0  z-[70] flex max-h-screen min-h-screen w-[70%] min-w-[80px] max-w-[283px] flex-col bg-[#ffffff]  text-secondary transition-all  duration-500 lg:sticky lg:min-w-[283px] ${
          isSideBarOpen
            ? 'left-0 w-[70%] lg:min-w-[290px] flx'
            : '-left-[100vw] lg:left-0 lg:w-[100px] hiddn'
        }  `}
      >
        {/* logo */}
        <div className="logo logo_shadow px-4 max-h-[100px] lg:px-[30px]  hidden w-full py-[35px] lg:block">
          <Link to={`/dashboard`}>
            <LogoIcon />
          </Link>
        </div>

        {/* SWITCH ORGANIZATION */}
        <div className="flex gap-2.5 items-center mt-5 md:mt-10 pl-4 lg:pl-[30px]">
          <BriefcaseIcon />
          <p className="text-base text-primary_200 font-normal">
            Switch Organization
          </p>
          <KeyboardArrowDownOutlinedIcon />
        </div>

        {/* links */}
        <ul
          style={{
            maxHeight: 'calc(100vh - 40px)',
          }}
          className={`max-w-unset mt-10 md:mt-[52px] min-w-full flex-grow overflow-y-auto`}
        >
          <li
            key={'dashboard'}
            className="min-w-[52px] "
          >
            <CustomLink baseUrl={`/dashboard`} to={`/dashboard`}>
              <Tooltip
                placement="right-end"
                title={'Dashboard'}
              >
                <div>
                  <HomeIcon />
                </div>
              </Tooltip>
              <span
                className={`ml-2.5 duration-200`}
              >
                Dashboard
              </span>
            </CustomLink>
          </li>

          <p className="font-medium text-xs text-[#545F7D]  mt-6 md:mt-[41px] px-4 lg:px-[30px] mb-2 5">
            CUSTOMERS
          </p>

          {MenuLinks.filter((_, i) => i <= 7).map(
            ({ icon, name, link }) => (
              <li
                key={name}
                className="min-w-[52px]"
              >
                <CustomLink
                  baseUrl={`/${type}/`}
                  to={link || `/${type}/`}
                >
                  <Tooltip
                    placement="right-end"
                    title={name}
                  >
                    <div>
                      {createElement(icon)}
                    </div>
                  </Tooltip>
                  <span
                    className={`ml-2.5 duration-200`}
                  >
                    {name}
                  </span>
                </CustomLink>
              </li>
            )
          )}

          <p className="font-medium text-xs text-[#545F7D] mt-6 md:mt-[41px] px-4 lg:px-[30px] mb-2 5">
            BUSINESSES
          </p>

          {MenuLinks.filter(
            (_, i) => i > 7 && i <= 16
          ).map(({ icon, name, link }) => (
            <li
              key={name}
              className="min-w-[52px]"
            >
              <CustomLink
                baseUrl={`/${type}/`}
                to={link || `/${type}/`}
              >
                <Tooltip
                  placement="right-end"
                  title={name}
                >
                  <div>{createElement(icon)}</div>
                </Tooltip>
                <span
                  className={`ml-2.5 duration-200`}
                >
                  {name}
                </span>
              </CustomLink>
            </li>
          ))}

          <p className="font-medium text-xs text-[#545F7D] mt-6 md:mt-[41px] px-4 lg:px-[30px] mb-2 5">
            SETTINGS
          </p>

          {MenuLinks.filter((_, i) => i > 16).map(
            ({ icon, name, link }) => (
              <li
                key={name}
                className="min-w-[52px]"
              >
                <CustomLink
                  baseUrl={`/${type}/`}
                  to={link || `/${type}/`}
                >
                  <Tooltip
                    placement="right-end"
                    title={name}
                  >
                    <div>
                      {createElement(icon)}
                    </div>
                  </Tooltip>
                  <span
                    className={`ml-2.5 duration-200`}
                  >
                    {name}
                  </span>
                </CustomLink>
              </li>
            )
          )}
        </ul>
      </aside>
      <div
        id="scroller"
        className={` scrollbar-style  relative flex min-h-screen flex-col overflow-y-auto md:pr3 lg:pl6 flex-grow overflow-x-hidden`}
      >
        {/* mobile nav */}
        <nav className="bg-secondary-dark sticky top-0 z-[70] mb-4 flex items-center justify-between border-b bg-black bg-opacity-30 py-4 px-4 lg:hidden">
          <Link to={`/${type}`}>
            <IsolatedLogoIcon />
          </Link>
          <div className="flex gap-3">
            <IconButton
              component={Link}
              to={`/${type}/notifications`}
              sx={{ backgroundColor: '#F9F9FB' }}
            >
              <Badge
                color="primary"
                badgeContent={5}
              >
                <NotificationsNoneOutlinedIcon
                  sx={{ color: '#000000' }}
                />
              </Badge>
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: '#ffffff19',
              }}
              onClick={() =>
                setIsSideBarOpen((prev) => !prev)
              }
            >
              {!isSideBarOpen ? (
                <MenuIcon
                  sx={{ color: 'white' }}
                />
              ) : (
                <CloseIcon
                  sx={{ color: 'white' }}
                />
              )}
            </IconButton>
          </div>
        </nav>

        {/* desktop nav */}
        <nav className="hidden lg:flex max-h-[100px] sticky z-[70] top-0 w-full items-center logo_shadow py-[35px]  px-4 lg:px-[60px] justify-between bg-white">
          <InputField2 placeholder="Search for anything" />
          <div className="flex items-center justify-end">
            <Link
              to="#"
              className="text-[#213F7D] underline mr-[50px]"
            >
              Docs
            </Link>

            <IconButton
              component={Link}
              to={`/${type}/notifications`}
              sx={{ backgroundColor: '#ffffff' }}
            >
              <NotificationsNoneOutlinedIcon
                sx={{ color: '#213F7D' }}
              />
            </IconButton>
            <Link
              to={`/${type}/account`}
              className="ml-[33px]"
            >
              <UserDisplay
                name="Adedeji"
                email=""
                img="/images/user.png"
                size="medium"
              />
            </Link>
          </div>
        </nav>
        <div className="flex-grow p-4 md:p-6 lg:p-[60px]">
          {children || <Outlet />}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
