import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { FieldValues, useFieldArray, useForm } from 'react-hook-form';
import styled from 'styled-components';
import Select, { SelectOptionType } from './Select';
import { Variant, Error } from './TextField';
import Planar from '../ui/Planar';
import { sortObjectsByProperty } from '@utils/sortObjectByProperty';

const Container = styled.div``;

const ButtonTag = styled.button`
  position: relative;
  padding: 0.5rem;
  padding-right: 2.5rem;
  background-color: ${({ theme }) => theme.paleGrey};
  border: 0.1rem solid ${({ theme }) => theme.backgroundGrey};
  border-radius: 0.3rem;

  &::before,
  &:after {
    content: '';
    position: absolute;
    width: 1rem;
    height: 0.1rem;
    top: 52%;
    right: 0.5rem;
    background-color: ${({ theme }) => theme.darkGrey};
  }

  &:before {
    transform: translateY(-50%) rotate(45deg);
  }
  &:after {
    transform: translateY(-50%) rotate(-45deg);
  }
`;

const Tags = styled.div`
  padding-top: 1rem;
  padding-bottom: 2rem;
  display: flex;
  flex-flow: row wrap;
  column-gap: 0.5rem;
`;

interface ISelectTags {
  label: string;
  placeholder: string;
  options: SelectOptionType[];
  variant?: Variant;
  control: any;
  id: string;
  error?: boolean;
  errorMessage?: string;
  selectOne?: boolean;
  disabled?: boolean;
  all?: boolean;
}

const useSelectOptions = (
  options: SelectOptionType[],
  fields: any[],
  all: boolean
) => {
  const [optionsState, setOptionsState] = useState(options);
  useEffect(() => {
    if (options.length === 0) return;
    const newOptions = all
      ? [...options, { label: 'All', value: 'ALL' }]
      : options;
    setOptionsState(newOptions);
  }, [options, all]);
  const allSelected = useMemo(() => {
    const optionsLengt = all ? optionsState.length - 1 : optionsState;
    return fields.length === optionsLengt;
  }, [fields, optionsState, all]);
  const selectableOptions = useMemo(() => {
    return allSelected
      ? []
      : sortObjectsByProperty(optionsState, 'label').filter(
          (elem) => !fields.find((item) => item.value === elem.value)
        );
  }, [optionsState, fields, allSelected]);
  return { selectOptions: selectableOptions as SelectOptionType[] };
};
interface SelectFormField extends FieldValues {
  options: SelectOptionType[];
}
const SelectTags: FC<ISelectTags> = ({
  label,
  placeholder,
  options,
  variant,
  control,
  id,
  error = false,
  disabled = false,
  errorMessage,
  selectOne,
  all = false,
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: id,
  });
  const { control: selectControl } = useForm<SelectFormField>();
  const { selectOptions } = useSelectOptions(options, fields, all);

  const show = selectOne ? fields.length < 1 : true;

  // console.log(all, options, fields);

  const handleExtraChange = useCallback(
    (data: SelectOptionType) => {
      if (data.value === 'ALL') {
        const nonSelectedOptions = options.filter(
          (option) =>
            option.value !== 'ALL' &&
            !fields.some((field: any) => field.value === option.value)
        );
        nonSelectedOptions.forEach((elem) => append(elem));
      } else {
        append(data);
      }
    },
    [append, fields, options]
  );
  return (
    <Container>
      {show && (
        <Select
          id={'select'}
          placeholder={placeholder}
          label={label}
          control={selectControl}
          options={selectOptions}
          extraOnChange={handleExtraChange}
          variant={variant}
          clearOnSelect
          disabled={disabled}
        />
      )}
      {error && <Error>{errorMessage}</Error>}
      {fields.length > 0 && (
        <Tags>
          {fields.map((field: any, i: number) => (
            <ButtonTag
              key={`${id}-${field.value}-${i}`}
              onClick={() => (disabled ? {} : remove(i))}
            >
              <Planar
                as="span"
                fontSize={1.2}
                uppercase
                color="darkGrey"
                lineHeight={1}
              >
                {field.label}
              </Planar>
            </ButtonTag>
          ))}
        </Tags>
      )}
    </Container>
  );
};

export default SelectTags;
