import { Link, useMatch } from 'react-router-dom';

interface Props {
  children?: React.ReactNode;
  baseUrl?: string;
  to?: string;
  // border: string;
}

export default function CustomLink({
  children,
  to,
  baseUrl = '/',
}: // border,
//   ...props
Props) {
  let match = useMatch(
    to !== baseUrl ? baseUrl + to + '/*' : baseUrl
  );
  return to ? (
    <Link
      className={`menu-link pl-4 lg:pl-[30px] mb-3 md:mb-5 py-2.5 text-primary_200 font-WorkSans font-normal  text-base ${
        match
          ? 'bg-primary bg-opacity-[0.06] border-l-[3px] border-primary'
          : 'text-grey_20 hover:bg-primary hover:bg-opacity-30'
      }`}
      to={baseUrl === to ? to : baseUrl + to}
      // {...props}
    >
      {children}
    </Link>
  ) : (
    <button
      className={`menu-link my-7 w-full text-base text-grey_20 hover:bg-[#d3d3f031]`}
      // {...props}
    >
      {children}
    </button>
  );
}
