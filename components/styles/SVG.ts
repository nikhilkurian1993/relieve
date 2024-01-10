import styled from 'styled-components';
import { Color } from './Color';

const SVG = styled.svg<{ color: Color }>`
  path {
    fill: ${({ theme, color }) => theme[color]};
  }
`;

export default SVG;
