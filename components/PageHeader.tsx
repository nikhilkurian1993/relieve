import { Color } from '@components/styles/Color';
import Button from '@components/ui/Button';
import FlexBox from '@components/ui/FlexBox';
import React, { FC } from 'react';
import styled from 'styled-components';
import TitleAndBack from '@components/TitleAndBack';

const Container = styled.div`
  padding-bottom: 4rem;
`;

const PageHeader: FC<{
  title: string;
  back: Function;
  button?: string;
  buttonOnClick?: Function;
  buttonColor?: Color;
  secondaryButton?: string;
  secondaryButtonOnClick?: Function;
  secondaryButtonColor?: Color;
  flags?: any;
  extraMenu?: React.JSX.Element;
}> = ({
  title,
  button,
  back,
  buttonOnClick,
  buttonColor,
  flags,
  extraMenu,
  secondaryButton,
  secondaryButtonOnClick,
  secondaryButtonColor,
}) => (
  <Container>
    <FlexBox center spaceBetween>
      <FlexBox center columnGap={1}>
        <TitleAndBack onClick={() => back()} title={title} />
        {flags && (
          <FlexBox center columnGap={0.5}>
            {flags}
          </FlexBox>
        )}
      </FlexBox>
      <FlexBox center columnGap={1}>
        {secondaryButton && secondaryButtonOnClick && (
          <div>
            <Button
              size="small"
              color={secondaryButtonColor}
              onClick={() => secondaryButtonOnClick()}
            >
              {secondaryButton}
            </Button>
          </div>
        )}
        {button && buttonOnClick && (
          <div>
            <Button
              size="small"
              color={buttonColor}
              onClick={() => buttonOnClick()}
            >
              {button}
            </Button>
          </div>
        )}
        {extraMenu}
      </FlexBox>
    </FlexBox>
  </Container>
);

export default PageHeader;
