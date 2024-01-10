import PageHeader from '@components/PageHeader';
import PageBody from '@components/PageBody';
import AdminLayout from '@components/layouts/AdminLayout';
import { NextPageWithLayout } from '@pages/_app';
import { ReactElement } from 'react';
import Grid from '@components/ui/Grid';
import Planar from '@components/ui/Planar';
import { useForm } from 'react-hook-form';
import Box from '@components/ui/Box';
import ProductTitleDescrpitionTabs from '@components/form/ProductTitleDescrpitionTabs';
import Checkbox from '@components/form/Checkbox';
import TextField from '@components/form/TextField';
import FlexBox from '@components/ui/FlexBox';
import Select from '@components/form/Select';
import SelectTags from '@components/form/SelectTags';
import Mono from '@components/ui/Mono';
import Button from '@components/ui/Button';
import Flag from '@components/ui/Flag';

type languageType = {
  EN: string;
  FR: string;
  NL: string;
};
type category = {
  label: string;
  value: string;
};
interface FormData {
  age: string;
  attract: string;
  brand: string;
  campaign: string;
  category: string;
  depth: string;
  height: string;
  info: string;
  organization: string;
  price: string;
  productSize: string;
  quality: string;
  quantity: string;
  retailPrice: string;
  status: category;
  subcategory: category[];
  localeTitle: languageType;
  localeDescription: languageType;
  translate: boolean;
  weight: string;
  width: string;
}

const Products: NextPageWithLayout = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form values', data);
  };

  return (
    <>
      <PageHeader title={'Name of Item'} back={() => {}} />
      <PageBody>
        <Grid rowGap={4} columns={1}>
          <Box>
            <Grid columns={1} rowGap={1.5}>
              <Planar
                fontSize={1}
                fontSizeDesktop={1}
                color="darkGrey"
                as="span"
                lineHeight={2.3}
                uppercase={true}
              >
                Details
              </Planar>
              <ProductTitleDescrpitionTabs
                key="tab-data"
                register={register}
                errors={errors}
              />
              <Checkbox
                id="translate"
                register={register('translate')}
                copy="Auto translate"
                subcopy="Do you want to auto generate FR and NL on save"
                type="checkbox"
              />
              <TextField
                label="Internal info"
                id="info"
                minRows={4}
                placeholder="Your business name"
                type="text"
                multiline
                register={register('info', {
                  required: 'Please enter info',
                })}
                error={errors?.info?.message}
              />
            </Grid>
          </Box>
          <Box>
            <Grid columns={1} rowGap={1.5}>
              <Planar
                fontSize={1}
                fontSizeDesktop={1}
                color="darkGrey"
                as="span"
                lineHeight={2.3}
                uppercase={true}
              >
                Info
              </Planar>
              <FlexBox columnGap={2}>
                <TextField
                  label="Price"
                  id="price"
                  minRows={4}
                  placeholder="0"
                  register={register('price', {
                    required: 'Please enter price',
                    pattern: {
                      value: /^\d*\.?\d*$/,
                      message: 'Please enter numbers only',
                    },
                  })}
                  error={errors?.price?.message}
                  type="text"
                  indicator="€"
                />
                <TextField
                  label="Retail price"
                  id="retailPrice"
                  minRows={4}
                  placeholder="0"
                  register={register('retailPrice', {
                    required: 'Please enter retail price',
                    pattern: {
                      value: /^\d*\.?\d*$/,
                      message: 'Please enter numbers only',
                    },
                  })}
                  error={errors?.retailPrice?.message}
                  type="text"
                  indicator="€"
                />
                <TextField
                  label="Quantity"
                  id="quantity"
                  minRows={4}
                  placeholder="0"
                  register={register('quantity', {
                    required: 'Please enter quantity',
                    pattern: {
                      value: /^[0-9]*$/,
                      message: 'Please enter numbers only',
                    },
                  })}
                  error={errors?.quantity?.message}
                  type="text"
                />
                <TextField
                  label="Attractively"
                  id="attract"
                  minRows={4}
                  placeholder="Between 1 and 5"
                  register={register('attract', {
                    required: 'Please enter the value',
                    min: {
                      value: 1,
                      message: 'Value must be greater than or equal to 1',
                    },
                    max: {
                      value: 5,
                      message: 'Value must be less than or equal to 5',
                    },
                    pattern: {
                      value: /^[0-9]*$/,
                      message: 'Please enter numbers only',
                    },
                  })}
                  error={errors?.attract?.message}
                  type="text"
                />
              </FlexBox>
              <Grid columns={2} columnGap={2}>
                <Select
                  error="Please select category"
                  id="category"
                  label="Category"
                  options={[
                    { label: 'Chairs', value: 'chair' },
                    { label: 'Desk', value: 'desk' },
                    { label: 'Tables', value: 'table' },
                    { label: 'Storage', value: 'storage' },
                  ]}
                  placeholder="Select a category"
                  control={control}
                />
                <SelectTags
                  id="subcategory"
                  label="Sub category"
                  errorMessage="Please select sub category"
                  options={[
                    { label: 'High chairs', value: 'High chairs' },
                    { label: 'Poufs', value: 'Poufs' },
                    { label: 'Stools', value: 'Stools' },
                  ]}
                  placeholder="Select a sub category (can select multiple and they are display as such)"
                  control={control}
                />
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Grid columns={1} rowGap={1.5}>
              <Planar
                fontSize={1}
                fontSizeDesktop={1}
                color="darkGrey"
                as="span"
                lineHeight={2.3}
                uppercase={true}
              >
                Dimensions
              </Planar>
              <FlexBox columnGap={2}>
                <TextField
                  label="Height"
                  id="height"
                  placeholder="0"
                  register={register('height', {
                    required: 'Please enter height',
                    pattern: {
                      value: /^[0-9]*$/,
                      message: 'Please enter numbers only',
                    },
                  })}
                  error={errors?.height?.message}
                  type="text"
                  indicator="cm"
                />
                <TextField
                  label="Width"
                  id="width"
                  placeholder="0"
                  register={register('width', {
                    required: 'Please enter width',
                    pattern: {
                      value: /^[0-9]*$/,
                      message: 'Please enter numbers only',
                    },
                  })}
                  error={errors?.width?.message}
                  type="text"
                  indicator="cm"
                />
              </FlexBox>
              <FlexBox columnGap={2}>
                <TextField
                  label="Depth"
                  id="depth"
                  placeholder="0"
                  register={register('depth', {
                    required: 'Please enter depth',
                    pattern: {
                      value: /^[0-9]*$/,
                      message: 'Please enter numbers only',
                    },
                  })}
                  error={errors?.depth?.message}
                  type="text"
                  indicator="cm"
                />
                <TextField
                  label="Weight"
                  id="weight"
                  placeholder="0"
                  register={register('weight', {
                    required: 'Please enter weight',
                    pattern: {
                      value: /^[0-9]*$/,
                      message: 'Please enter numbers only',
                    },
                  })}
                  error={errors?.weight?.message}
                  type="text"
                  indicator="kg"
                />
              </FlexBox>
              <FlexBox>
                <TextField
                  label="Product Size"
                  id="productSize"
                  placeholder="Select size"
                  register={register('productSize', {
                    required: 'Please enter product size',
                    pattern: {
                      value: /^[0-9]*$/,
                      message: 'Please enter numbers only',
                    },
                  })}
                  error={errors?.productSize?.message}
                  type="text"
                  indicator="cm"
                />
              </FlexBox>
            </Grid>
          </Box>
          <Box>
            <Grid columns={1} rowGap={1.5}>
              <Planar
                fontSize={1}
                fontSizeDesktop={1}
                color="darkGrey"
                as="span"
                lineHeight={2.3}
                uppercase={true}
              >
                Age, Quality and brand
              </Planar>
              <FlexBox columnGap={2}>
                <TextField
                  label="Age"
                  id="age"
                  register={register('age', {
                    required: 'Please enter age',
                    pattern: {
                      value: /^[0-9]*$/,
                      message: 'Please enter numbers only',
                    },
                  })}
                  error={errors?.age?.message}
                  placeholder="Select age bracket"
                  type="text"
                />
                <TextField
                  label="Quality"
                  id="quality"
                  placeholder="Select quality"
                  register={register('quality', {
                    required: 'Please enter quality',
                    pattern: {
                      value: /^[0-9]*$/,
                      message: 'Please enter numbers only',
                    },
                  })}
                  error={errors?.quality?.message}
                  type="text"
                  indicator="cm"
                />
              </FlexBox>

              <FlexBox>
                <TextField
                  label="Brand"
                  id="brand"
                  minRows={4}
                  placeholder="Select brand"
                  register={register('brand', {
                    required: 'Please enter brand',
                  })}
                  error={errors?.brand?.message}
                  type="text"
                />
              </FlexBox>
            </Grid>
          </Box>
        </Grid>
        <FlexBox column rowGap={1.5}>
          <Box>
            <Grid rowGap={1}>
              <FlexBox spaceBetween rowGap={1.5}>
                <Planar
                  fontSize={1}
                  fontSizeDesktop={1}
                  color="darkGrey"
                  as="span"
                  lineHeight={2.3}
                  uppercase={true}
                >
                  Status
                </Planar>
                <Flag color="blue">
                  <Mono fontSize={1} bold>
                    SAVED
                  </Mono>
                </Flag>
              </FlexBox>
              <FlexBox rowGap={1.5} columnGap={1}>
                <Button
                  fullwidth
                  center
                  onClick={handleSubmit(onSubmit)}
                  type="submit"
                >
                  Save
                </Button>
              </FlexBox>
            </Grid>
          </Box>
          <Box>
            <Grid rowGap={1}>
              <Select
                error="Please select category"
                id="status"
                options={[
                  { label: 'category 1', value: 'category1' },
                  { label: 'category 2', value: 'category2' },
                  { label: 'category 3', value: 'category3' },
                ]}
                placeholder="Select a category"
                control={control}
              />

              <TextField
                label="Organization"
                id="organization"
                placeholder="0"
                register={register('organization', {
                  required: 'Please enter organization',
                })}
                error={errors?.organization?.message}
                type="text"
              />
              <Select
                id="campaign"
                label="Campaign"
                error="Please select campaign"
                options={[
                  {
                    label: 'Deprevernet Collective',
                    value: 'Deprevernet Collective',
                  },
                  {
                    label: 'ING',
                    value: 'ING',
                  },
                  {
                    label: 'Relieve Showroom',
                    value: 'Relieve Showroom',
                  },
                  {
                    label: 'Relieve Warehouse',
                    value: 'Relieve Warehouse',
                  },
                ]}
                placeholder="Select a campaign"
                control={control}
              />
            </Grid>
          </Box>
        </FlexBox>
      </PageBody>
    </>
  );
};

Products.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout {...page.props}>{page}</AdminLayout>;
};

export default Products;
