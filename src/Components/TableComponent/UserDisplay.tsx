import { Avatar } from '@mui/material';

type Props = {
  name: string;
  img: string;
  email: string;
  pad?: string;
  imgRounded?: boolean;
  truncate?: boolean;
  max_width?: string;
  size?: string;
  textWhite?: boolean;
  fontSize?: string;
  emailTextColor?: string;
};

function UserDisplay({
  name,
  img,
  email,
  pad,
  imgRounded = true,
  truncate = false,
  max_width = '150px',
  size = 'medium',
  textWhite = false,
  fontSize,
  emailTextColor,
}: // ...props
Props) {
  return (
    <div
      className={`flex items-center gap-x-3 ${
        pad && 'p-3'
      }         
      `}
    >
      <div className={'static'}>
        <Avatar
          src={img}
          sx={{
            borderRadius: imgRounded
              ? '50%'
              : '4px',
            width:
              size === 'medium'
                ? 40
                : size === 'small'
                ? 30
                : size === 'large'
                ? 64
                : 50,
            height:
              size === 'medium'
                ? 40
                : size === 'small'
                ? 30
                : size === 'large'
                ? 64
                : 50,
          }}
        />
      </div>
      <div>
        <p
          style={{ maxWidth: max_width }}
          className={`${truncate && `truncate`} ${
            size === 'small'
              ? 'text-sm'
              : size === 'large'
              ? 'text-2xl font-semibold'
              : 'text-base'
          } ${
            textWhite
              ? 'text-white'
              : 'text-grey_20'
          } ${
            fontSize ? fontSize : 'font-medium'
          }  font-Bai capitalize`}
        >
          {name}
        </p>
        {email && (
          <p
            className={`w-fit ${
              truncate ? 'truncate' : ''
            } ${
              size === 'medium'
                ? 'text-sm'
                : size === 'small'
                ? 'text-xs'
                : 'text-base'
            } mt-0 ${
              textWhite
                ? 'text-white'
                : emailTextColor
                ? emailTextColor
                : 'text-[#aaaaaa]'
            }
          
             `}
          >
            {email} &nbsp;{' '}
          </p>
        )}
      </div>
    </div>
  );
}

export default UserDisplay;
