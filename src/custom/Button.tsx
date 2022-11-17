import { Button as PaperButton } from 'react-native-paper';
import { Spread, Style } from '../util/types/props';

interface Props {
  style?: Style;
  children: string;
  [prop: string]: Spread;
}

const Button: React.FC<Props> = (props) => {
  return (
    <PaperButton icon={props.icon} {...props}>
      {props.children}
    </PaperButton>
  );
};

export default Button;
