import React from 'react';
import { useNavigate } from 'react-router-native';

import Button from './Button';

interface Props {
  to: string;
  children?: string;
  icon?: string;
}

const Link: React.FC<Props> = (props) => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(props.to);
  };

  return (
    <Button icon={props.icon} onPress={navigateHandler}>
      {props.children}
    </Button>
  );
};

export default Link;
