import { useLocation, Link } from 'react-router-dom';
import * as C from './styled';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

type Props = {
    title: string;
    icon: string;
    link: string;
};

export const MenuItem = ({ title, icon, link }: Props) => {
  const location = useLocation();

  let isActive = location.pathname === link;

  return (
    <C.LinkArea
      id={title}
      data-tooltip-content={title}
      data-tooltip-place='right'
      active={isActive}
    >
      <Link to={link}><C.LinkIcon src={icon} /></Link>
      <Tooltip anchorId={title} />
    </C.LinkArea>
);
};