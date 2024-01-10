import PageHeader from '@components/PageHeader';
import PageBody from '@components/PageBody';
import AdminLayout from '@components/layouts/AdminLayout';
import { NextPageWithLayout } from '@pages/_app';
import { ReactElement } from 'react';
import Grid from '@components/ui/Grid';
import FlexBox from '@components/ui/FlexBox';

const Admin: NextPageWithLayout = () => (
  <>
    <PageHeader title={'Dashboard'} back={() => {}} />
    <PageBody>
      <Grid rowGap={2}>
        <FlexBox center spaceBetween>
          Welcome to the Relieve Furniture dashboard
        </FlexBox>
      </Grid>
      <div></div>
    </PageBody>
  </>
);

Admin.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout {...page.props}>{page}</AdminLayout>;
};

export default Admin;
