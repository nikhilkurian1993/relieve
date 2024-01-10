import React, { FC } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div<{
  isDisabled?: boolean;
  fullWidth?: boolean;
  isChecked?: boolean;
  isStatic?: boolean;
  filled?: boolean;
}>`
  position: relative;
  height: 2rem;
  width: 2rem;

  .box {
    cursor: pointer;
    display: inline-block;
    border: 0.1rem solid ${({ theme }) => theme.grey};
    border-radius: 0.3rem;
    height: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.veryLightGrey};
  }

  .box:before {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);

    ${({ filled, isChecked }) =>
      filled && isChecked
        ? css`
            height: 2rem;
            width: 2rem;
            border: 1px solid ${({ theme }) => theme.mediumGreen};
          `
        : css`
            height: 1.3rem;
            width: 1.3rem;
          `};

    border-radius: 0.3rem;
  }

  input:checked ~ .box {
    border-color: ${({ theme }) => theme.mediumGreen};
  }

  input:checked ~ .box:before {
    background-color: ${({ theme }) => theme.green};
  }

  ${({ isChecked, isStatic }) =>
    isChecked &&
    isStatic &&
    css`
      .box {
        border-color: ${({ theme }) => theme.mediumGreen};
      }
      .box:before {
        background-color: ${({ theme }) => theme.green};
      }
    `};
`;

const Label = styled.label``;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const CheckboxSingle: FC<{
  id: string;
  register?: any;
  disabled?: boolean;
  fullWidth?: boolean;
  checked?: boolean;
  isStatic?: boolean;
  onClick?: Function;
  filled?: boolean;
  type?: string;
  value?: string;
}> = ({
  id,
  register,
  disabled,
  fullWidth,
  checked,
  isStatic = false,
  onClick,
  filled,
  type = 'checkbox',
  value,
}) => {
  return (
    <Container
      isDisabled={disabled}
      fullWidth={fullWidth}
      isChecked={checked}
      isStatic={isStatic}
      filled={filled}
    >
      {isStatic ? (
        <span
          className="box"
          onClick={onClick ? () => onClick() : () => {}}
        ></span>
      ) : (
        <Label htmlFor={id}>
          <Input
            type={type}
            value={value}
            id={id}
            {...register}
            disabled={disabled}
            checked={checked}
          />
          <span
            className="box"
            onClick={onClick ? () => onClick() : () => {}}
          ></span>
        </Label>
      )}
    </Container>
  );
};

export default CheckboxSingle;
