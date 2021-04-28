import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';


export const Container = styled(RectButton)`

  width: 100%;
  height: 60px;
  background: #ff9000;

  justify-content: center;
  align-items: center;
  margin-top: 10px;

  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: #312e38;
  font-size: 18px;
  font-weight: bold;
`;