import FlexBox from '@components/ui/FlexBox';
import Grid from '@components/ui/Grid';
import TextField from '@components/form/TextField';
import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div``;

export const Tab = styled.div<{ active: boolean }>`
  position: relative;
  padding: 1.5rem 2rem;
  border: 0.1rem solid ${({ theme }) => theme.backgroundGrey};
  border-bottom: none;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  background-color: ${({ active }) => (active ? '#FCFCFC' : '#F4F5F5')};
  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      &:before {
        content: '';
        position: absolute;
        bottom: -0.1rem;
        left: 0.1rem;
        width: calc(100% - 0.2rem);
        height: 0.1rem;
        background-color: #fcfcfc;
        z-index: 2;
      }
    `};

  &:hover {
    background-color: #fcfcfc;
  }

  &:not(:first-child) {
    margin-left: -0.1rem;
  }
`;

export const TabsContainer = styled.div`
  position: relative;
`;

export const TabBody = styled.div<{ active: boolean }>`
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  border: 0.1rem solid ${({ theme }) => theme.backgroundGrey};
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  display: ${({ active }) => (active ? 'block' : 'none')};
`;

const pageContent = [
  {
    id: 'EN',
    tab: 'English',
  },
  {
    id: 'FR',
    tab: 'French',
  },
  {
    id: 'NL',
    tab: 'Dutch',
  },
];

const ProductTitleDescrpitionTabs: FC<{
  register: any;
  errors: any;
}> = ({ register, errors }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Container>
      <FlexBox>
        {pageContent.map((item, i: number) => (
          <Tab
            key={item.id}
            onClick={() => setActiveTab(i)}
            active={i === activeTab}
          >
            {item.tab}
          </Tab>
        ))}
      </FlexBox>
      <TabsContainer>
        {pageContent.map((item, i: number) => (
          <TabBody key={item.id} active={i === activeTab}>
            <Grid rowGap={1.5}>
              <TextField
                id={`localeTitle.${item.id}`}
                label={`${item.tab} Title`}
                placeholder={`Enter ${item.tab} title`}
                register={register(`localeTitle.${item.id}` as string, {
                  required: item.id === 'EN' ? 'Please enter a title' : false,
                  minLength: {
                    value: 3,
                    message: 'must have more than 3 characters',
                  },
                })}
                error={errors['localeTitle']?.[`${item.id}`]?.message}
                type="text"
              />
              <TextField
                id={`localeDescription.${item.id}`}
                label={`${item.tab} Description`}
                placeholder={`Enter ${item.tab} description`}
                register={register(`localeDescription.${item.id}` as string, {
                  required:
                    item.id === 'EN' ? 'Please enter a descrpition' : false,
                  minLength: {
                    value: 3,
                    message: 'must have more than 3 characters',
                  },
                })}
                error={errors['localeDescription']?.[`${item.id}`]?.message}
                type="text"
                multiline
                minRows={4}
              />
            </Grid>
          </TabBody>
        ))}
      </TabsContainer>
    </Container>
  );
};

export default ProductTitleDescrpitionTabs;
