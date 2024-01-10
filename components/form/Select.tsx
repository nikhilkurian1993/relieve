import { theme } from '@components/layouts/BaseLayout';
import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import ReactSelect, {
  StylesConfig,
  DropdownIndicatorProps,
  MenuProps,
  components,
  ClearIndicatorProps,
} from 'react-select';
import styled, { css } from 'styled-components';
import fonts from '@lib/use-fonts';

import Button from '../ui/Button';

import { Error, Label } from './TextField';
import Planar from '../ui/Planar';
import FlexBox from '../ui/FlexBox';

type SelectVariant = 'default' | 'secondary';

// TODO
export type SelectOptionType<T = string | number | {}> = {
  value: T;
  label: string;
};

type MenuButtonOptionType = {
  copy: string;
  onClick: Function;
  variant: any;
  showEmpty: boolean;
  empty: any;
};

const Container = styled.div<{ error?: boolean }>`
  width: 100%;
  ${({ error, theme }) =>
    error &&
    css`
      > div:first-of-type > div:first-of-type {
        border-color: ${theme.red};
      }
    `}
`;

const SVG = styled.svg`
  width: 0.8rem;

  path {
    fill: ${({ theme }) => theme.black};
  }
`;

export const customSelectStyles: StylesConfig = {
  control: (styles) => ({
    ...styles,
    border: `0.1rem solid ${theme.backgroundGrey}`,
    // backgroundColor: theme.backgroundGrey,
    backgroundColor: '#fcfcfc',
    color: theme.black,
    padding: '1rem 1.25rem',
    boxShadow: 'none',
    borderRadius: '0.5rem',
    lineHeight: '1.3',

    '@media only screen and (min-width:1536px)': {
      padding: '1.25rem',
    },

    // '@media only screen and (max-width: 1440px) and (min-width: 1025px)': {
    //   padding: '1.25rem 1rem',
    // },

    '&:hover': {
      borderColor: theme.backgroundGrey,
    },
  }),
  valueContainer: (styles) => ({
    ...styles,
    padding: 0,
    margin: 0,
    fontSize: 14,
  }),
  placeholder: (styles) => ({
    ...styles,
    padding: 0,
    margin: 0,
    color: theme.darkGrey,
    fontSize: 14,
    fontWeight: 300,
  }),
  input: (styles) => ({
    ...styles,
    padding: 0,
    margin: 0,
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    width: 0,
    height: 0,
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    padding: 0,
  }),
  singleValue: (styles) => ({
    ...styles,
    color: theme.black,
  }),
  clearIndicator: (styles) => ({ ...styles }),

  menu: () => ({
    position: 'absolute',
    top: '0',
    width: '100%',
    zIndex: 1,
    boxSizing: 'border-box',
    // padding: '0.7rem 0.5rem',
    // padding: '0 1rem',
    // border: `0.1rem solid ${theme.mediumGrey}`,
    borderRadius: '0.5rem',

    // backgroundColor: theme.backgroundGrey,
    backgroundColor: '#fcfcfc',
    boxShadow: '0px 1px 6px #00000029',
    // boxShadow: '0px 5px 15px 0px rgba(12, 82, 60, 0.3)',
  }),
  option: (styles, { isSelected }) => ({
    // borderRadius: '0.5rem',
    padding: '1rem 1rem',
    // paddingRight: '2.5rem',

    // marginBottom: '0.2rem',
    borderBottom: `1px solid ${theme.lightGrey}`,

    cursor: 'pointer',
    // backgroundColor: isSelected ? theme.grey : 'transparent',
    backgroundColor: isSelected ? theme.lightGrey : 'transparent',

    color: isSelected ? theme.black : theme.darkGrey,
    fontSize: 14,

    '&:hover': {
      // backgroundColor: theme.grey,
      backgroundColor: theme.lightGrey,
      color: theme.black,
      // borderRadius: '0.5rem',
    },
    '&:last-child': {
      borderBottom: 'none',
    },
  }),
};

const customStylesSecondary: StylesConfig = {
  ...customSelectStyles,
  control: (styles) => ({
    ...styles,
    border: `0.1rem solid ${theme.mediumGrey}`,
    // backgroundColor: theme.white,
    color: theme.green,
    padding: '1.5rem',
    boxShadow: 'none',
    borderRadius: '0.5rem',

    '&:hover': {
      borderColor: theme.green,
    },
  }),
};

const MenuWithButtonContainer = styled(components.Menu)`
  > div:first-child {
    > div:last-child {
      display: none;
    }
  }
`;

const MenuButtonContainer = styled.div`
  text-align: center;
  padding: 0.5rem 0 1rem;
`;

const Empty = styled.div<{ extraSpaceBelow?: boolean }>`
  text-align: center;
  color: ${({ theme }) => theme.textGrey};
  padding: ${({ extraSpaceBelow }) =>
    extraSpaceBelow ? '0.5rem 0 1rem' : '0.5rem 0'};
`;

const Clear = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  right: 4rem;
  height: 2rem;
  width: 2rem;
  backdrop-filter: brightness(0.95);
  border-radius: 10rem;
  transform: translateY(-50%);
  cursor: pointer;

  > {
    line-height: 1;
  }

  &:after {
    content: '';
    position: absolute;
    width: 0.1rem;
    height: 120%;
    top: 50%;
    right: -1rem;
    transform: translateY(-50%);
    background-color: ${({ theme }) => theme.backgroundGrey};
  }
`;

const MenuWithButton = (props: MenuProps) => {
  const menuButton = props.options[
    props.options.length - 1
  ] as MenuButtonOptionType;

  return (
    <>
      <MenuWithButtonContainer {...props}>
        {props.children}
        {menuButton.showEmpty && menuButton.empty && (
          <Empty>{menuButton.empty}</Empty>
        )}
        <MenuButtonContainer>
          <Button
            color="green"
            size="small"
            onClick={() => menuButton.onClick()}
            // variant={menuButton.variant}
            variant={undefined}
          >
            {menuButton.copy}
          </Button>
        </MenuButtonContainer>
      </MenuWithButtonContainer>
    </>
  );
};

const MenuWithMessage = (props: MenuProps) => {
  const menuButton = props.options[
    props.options.length - 1
  ] as MenuButtonOptionType;

  return (
    <>
      <MenuWithButtonContainer {...props}>
        {props.children}
        {menuButton.showEmpty && menuButton.empty && (
          <Empty extraSpaceBelow>{menuButton.empty}</Empty>
        )}
      </MenuWithButtonContainer>
    </>
  );
};

const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <SVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 8 4"
        xmlSpace="preserve"
      >
        <path d="m7.9 0-4 4-4-4h8z" />
      </SVG>
    </components.DropdownIndicator>
  );
};

const ClearIndicator = (props: ClearIndicatorProps) => {
  const {
    innerProps: { ref, ...restInnerProps },
  } = props as any;
  return (
    <Clear {...restInnerProps} ref={ref}>
      <Planar
        as={'span'}
        fontSize={1.2}
        lineHeight={1}
        light
        uppercase
        color="darkGrey"
      >
        x
      </Planar>
    </Clear>
  );
};

const Select: FC<{
  id: string;
  label?: string;
  options: SelectOptionType[];
  menuButton?: string;
  menuButtonVariant?: any;
  menuButtonOnClick?: Function;
  placeholder: string;
  variant?: SelectVariant;
  control: any;
  error?: any;
  empty?: string;
  disabled?: boolean;
  isClearable?: boolean;
  extraOnChange?: Function;
  clearOnSelect?: boolean;
}> = ({
  id,
  label,
  options,
  menuButton,
  menuButtonOnClick,
  menuButtonVariant,
  placeholder,
  variant = 'default',
  control,
  error,
  empty,
  disabled,
  isClearable = false,
  extraOnChange,
  clearOnSelect,
}) => {
  let components = { DropdownIndicator, ClearIndicator } as any;
  let dynamicOptions = [...options] as any;

  if (menuButton) {
    components.Menu = MenuWithButton;
    dynamicOptions.push({
      id: 'menuButton',
      copy: menuButton,
      onClick: menuButtonOnClick,
      variant: menuButtonVariant,
      empty,
      showEmpty: options.length === 0,
    });
  }

  if (!menuButton && empty) {
    components.Menu = MenuWithMessage;
    dynamicOptions.push({
      empty,
      showEmpty: options.length === 0,
    });
  }

  const rules = {
    required: error ? { message: error, value: true } : false,
  };

  return (
    <Controller
      control={control}
      rules={rules}
      name={id}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { error: isError },
      }) => {
        return (
          <Container
            error={isError != undefined}
            className={`${fonts.planar.className}`}
          >
            <FlexBox column rowGap={0.5}>
              {label && (
                <div>
                  <Label
                    id={id}
                    htmlFor={`${id}-select`}
                    error={isError != undefined}
                    disabled={disabled}
                  >
                    {label}
                  </Label>
                </div>
              )}
              <ReactSelect
                instanceId={`${id}-select`}
                inputId={`${id}-select`}
                name={name}
                classNamePrefix="form-select"
                aria-labelledby={id}
                options={dynamicOptions}
                placeholder={placeholder}
                styles={
                  variant === 'secondary'
                    ? customStylesSecondary
                    : customSelectStyles
                }
                components={components}
                onBlur={onBlur}
                onChange={(option: SelectOptionType) => {
                  onChange(option);
                  extraOnChange && extraOnChange(option);
                  clearOnSelect && onChange(null);
                }}
                value={value}
                ref={ref}
                isDisabled={disabled}
                isClearable={isClearable}
              />
            </FlexBox>
            {isError != undefined && <Error>{error}</Error>}
          </Container>
        );
      }}
    />
  );
};

export default Select;
