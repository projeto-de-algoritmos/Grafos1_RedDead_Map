import styled from 'styled-components';
import { colors } from '../../theme/colors';

export const Container = styled.div`
  display: flex;
  background: ${colors.red};
  height: 60px;
  align-items: center;
  padding-left: 15px;
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
`;

export const Text = styled.h1`
  font-family: "Poppins";
  font-weight: 700;
  font-size: 28px;
  color: ${colors.white};
  margin-left: 20px;
`