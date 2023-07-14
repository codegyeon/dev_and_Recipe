import { ReactElement, ReactNode } from 'react';
import { IconContext } from 'react-icons';
import { Button } from './style';

interface CustomButtonProps {
  theme: string;
  children: ReactNode;
  icon?: ReactElement;
  size: string;
  onClick?: (e:any) => void;
}

const CustomButton = ({theme, children, icon , size , onClick}: CustomButtonProps) => (
  <Button theme={theme} size={size} onClick={onClick} >
    <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
      {icon} {children}
    </IconContext.Provider>
  </Button>
);

export default CustomButton;
