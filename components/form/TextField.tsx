import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';
import fonts from '@lib/use-fonts';
import Tick from '@components/images/Icons/Tick';
export type Variant = 'default' | 'secondary';
export type Type = 'text' | 'email' | 'password' | 'number';
type Unit = 'cm' | 'm' | 'kg' | 'g' | 'mm' | 'week(s)' | '€';

import type { Color } from '@components/styles/Color';
import Eye from '@components/images/Icons/Eye';
import Search from '@components/images/Icons/Search';
import Planar from '@components/ui/Planar';
import FlexBox from '@components/ui/FlexBox';

export interface TextFieldType {
  id: string;
  label?: string | undefined;
  sublabel?: string | undefined;
  placeholder: string;
  type: Type;
  register: any;
  error?: any;
  multiline?: boolean;
  minRows?: number;
  indicator?: Unit;
  search?: boolean;
  decimal?: boolean;
  disabled?: boolean;
  onFocus?: Function;
  isValid?: boolean;
  showEye?: boolean;
  onClick?: Function;
  onChange?: Function;
}

export const InputStyles = css<{
  as?: any;
  error?: boolean;
  indicator?: boolean;
  search?: boolean;
  isDisabled?: boolean;
  variant?: Variant;
}>`
  display: block;
  width: 100%;
  padding: ${({ search }) =>
    search ? '1rem 1.5rem 1rem 4rem' : '1rem 1.25rem'};
  color: ${({ theme }) => theme.black};
  background: ${({ theme }) => theme.veryLightGrey};

  /* background: ${({ theme, variant }) =>
    variant === 'secondary' ? theme.white : theme.backgroundGrey}; */
  border: 0.1rem solid ${({ theme }) => theme.backgroundGrey};
  border-radius: 0.5rem;
  line-height: 1.3;
  font-weight: 300;

  @media (min-width: ${({ theme }) => theme.desktoplarge}) {
    padding: 1.25rem;
    padding: ${({ search }) =>
      search ? '1.25rem 1.25rem 1.25rem 4rem' : '1.25rem'};
  }

  &::placeholder {
    color: ${({ theme }) => theme.darkGrey};
    font-size: 1.4rem;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.backgroundGrey};
    ${({ error }) =>
      error
        ? css`
            border-color: ${({ theme }) => theme.red};
          `
        : css`
            border-color: ${({ theme }) => theme.backgroundGrey};
          `}
  }

  ${({ isDisabled }) =>
    !isDisabled &&
    css`
      /* opacity: 0.5; */
      &:hover {
        @media (min-width: ${({ theme }) => theme.tablet}) {
          outline: none;
          border-color: ${({ theme }) => theme.black};
        }
      }
    `};

  ${({ error }) =>
    error &&
    css`
      border-color: ${({ theme }) => theme.red};
    `}

  ${({ indicator }) =>
    indicator &&
    css`
      /* Chrome, Safari, Edge, Opera */
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Firefox */
      &[type='number'] {
        -moz-appearance: textfield;
      }
    `}
`;

const Container = styled.div<{
  indicator?: string;
  hasLabel?: boolean;
  disabled?: boolean;
}>`
  position: relative;
  width: 100%;

  ${({ indicator, hasLabel }) =>
    indicator &&
    css`
      &:after {
        position: absolute;
        content: '${indicator}';
        top: ${hasLabel ? 'calc(1rem + 50%)' : 'calc(50%)'};
        right: 1rem;
        transform: translateY(-50%);
        color: ${({ theme }) => theme.textGrey};
      }
    `}
`;

export const Label = styled.label<{
  error?: boolean;
  color?: Color;
  noPadding?: boolean;
  disabled?: boolean;
}>`
  font-size: 1.2rem;
  padding-left: 0.3rem;
  line-height: 1;
  color: ${({ theme, error, color }) =>
    error ? theme.burgundy : color ? theme[color] : theme.black};

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.textGrey};
    `};

  ${({ noPadding }) =>
    noPadding &&
    css`
      padding-top: 0;
      padding-right: 0;
      padding-bottom: 0;
    `};

  @media (max-width: ${({ theme }) => theme.desktoplarge}) {
    font-size: 1.3rem;
  }

  @media (max-width: ${({ theme }) => theme.desktop}) {
    font-size: 1.1rem;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    font-size: 1.2rem;
  }
`;

export const Input = styled.input<any>`
  ${InputStyles}
`;

export const Error = styled.div`
  font-size: 1.4rem;

  color: ${({ theme }) => theme.darkRed};
  padding-top: 0.25rem;

  @media (max-width: ${({ theme }) => theme.desktoplarge}) {
    font-size: 1.2rem;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 50%;
  left: 1.5rem;
  transform: translateY(-40%);
  width: 1.5rem;
`;

const Absolute = styled.div<{ aside?: boolean }>`
  position: absolute;

  top: 62.5%;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    top: 62.5%;
  }

  transform: translateY(-50%);
  width: 1.5rem;
  ${({ aside }) =>
    aside
      ? css`
          right: 4rem;
        `
      : css`
          right: 2rem;
        `};
`;

const Icon = styled.div<{ color?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.5rem;
  width: 1.5rem;
  background-color: ${({ theme, color }) => theme[color as any]};
  border-radius: 5rem;
  line-height: 0;

  ${({ color }) =>
    color === 'paleYellow' &&
    css`
      color: ${({ theme }) => theme.burgundy};
    `};
`;

const IconEye = styled.div<{ color?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 3rem;
  /* background-color: grey; */
  border-radius: 5rem;
  line-height: 0;
`;

const IconContainer = styled.div`
  width: 0.8rem;
`;

const SubLabel = styled(Planar)`
  padding-left: 0.3rem;
`;

const TextField: FC<TextFieldType> = ({
  id,
  label,
  sublabel,
  placeholder,
  type,
  register,
  error,
  multiline,
  minRows = 4,
  indicator,
  search,
  decimal,
  disabled,
  onFocus,
  isValid,
  showEye,
  onClick,
  onChange,
}) => {
  const isError = error != undefined;
  const hasLabel = label != undefined;

  const [clickedEye, setClickedEye] = useState('password');
  return (
    <Container
      indicator={indicator}
      hasLabel={hasLabel}
      className={`${fonts.planar.className}`}
      disabled={disabled}
      onClick={onClick ? () => onClick() : undefined}
    >
      <FlexBox column rowGap={0.5}>
        {(label || sublabel) && (
          <div>
            {label && (
              <Label htmlFor={id} error={isError} disabled={disabled}>
                {label}
              </Label>
            )}
            {sublabel && (
              <SubLabel
                fontSize={1.2}
                fontSizeDesktopLarge={1.3}
                fontSizeDesktop={1.1}
                fontSizeTablet={1.2}
                light
                color="darkGrey"
                lineHeight={1.3}
              >
                {sublabel}
              </SubLabel>
            )}
          </div>
        )}
        {search && (
          <SearchIcon>
            <Search color="textGrey" />
          </SearchIcon>
        )}
        <Input
          id={id}
          name={id}
          type={showEye ? clickedEye : type}
          {...register}
          placeholder={placeholder}
          error={isError}
          as={multiline ? 'textarea' : ''}
          rows={minRows}
          indicator={indicator}
          step={decimal ? '.01' : '1'}
          search={search}
          disabled={disabled}
          isDisabled={disabled}
          onFocus={onFocus}
        />
      </FlexBox>

      {isValid && (
        <Absolute aside={showEye}>
          <Icon color="brightGreen">
            <IconContainer>
              <Tick />
            </IconContainer>
          </Icon>
        </Absolute>
      )}

      {showEye && (
        <Absolute>
          <IconEye>
            <div
              style={{ width: '2rem', cursor: 'pointer' }}
              onClick={() =>
                setClickedEye(clickedEye === 'text' ? 'password' : 'text')
              }
            >
              <Eye color={clickedEye === 'text' ? 'green' : 'grey'} />
            </div>
          </IconEye>
        </Absolute>
      )}

      {isError && error !== '' && <Error>{error}</Error>}
    </Container>
  );
};

export default TextField;
