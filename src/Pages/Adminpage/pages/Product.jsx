import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TableThree from '../components/Tables/TableThree';
import TableTwo from '../components/Tables/TableTwo';
import DefaultLayout from '../layout/DefaultLayout';

const Product = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName='Product' />

      <div className='flex flex-col gap-10'>
        <TableTwo />
        <TableThree />
      </div>
    </DefaultLayout>
  );
};

export default Product;
