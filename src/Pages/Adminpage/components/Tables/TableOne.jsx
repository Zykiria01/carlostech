/* eslint-disable no-unused-vars */
import Gear from '../../../../assets/gear.png';

const productData = [
  {
    image: Gear,
    name: 'Rasio Motor',
    phone: '+62 812-0718-7465',
    address: 'Jl. Joko Tingkir no. 51',
    category: 'Alat berat',
    sold: 5,
    note: 'note 1',
    status: 'Lunas',
  },
  {
    image: Gear,
    name: 'Sparepart Pabrik',
    phone: '+62 812-0718-7465',
    address: 'Jl. Joko Tingkir no. 51',
    category: 'Alat berat',
    sold: 5,
    note: 'note 2',
    status: 'Belum lunas',
  },
  {
    image: Gear,
    name: 'Rasio Mobil',
    phone: '+62 812-0718-7465',
    address: 'Jl. Joko Tingkir no. 51',
    category: 'Alat berat',
    sold: 5,
    note: 'note 3',
    status: 'Belum lunas',
  },
  {
    image: Gear,
    name: 'Alat Berat',
    phone: '+62 812-0718-7465',
    address: 'Jl. Joko Tingkir no. 51',
    category: 'Alat berat',
    sold: 5,
    note: 'note 4',
    status: 'Lunas',
  },
];

const TableOne = () => {
  return (
    <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
      <div className='py-6 px-4 md:px-6 xl:px-7.5'>
        <h4 className='text-xl font-semibold text-black dark:text-white'>
          Produk Terjual
        </h4>
      </div>

      <div className='grid grid-cols-8 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-10 md:px-6 2xl:px-7.5'>
        <div className='col-span-2 flex items-center'>
          <p className='font-medium'>Nama Produk</p>
        </div>
        <div className='col-span-2 hidden items-center sm:flex'>
          <p className='font-medium'>No. Telepon</p>
        </div>
        <div className='col-span-2 flex items-center'>
          <p className='font-medium'>Alamat</p>
        </div>
        <div className='col-span-1 flex items-center'>
          <p className='font-medium'>Jenis Mesin</p>
        </div>
        <div className='col-span-1 flex items-center'>
          <p className='font-medium'>Jumlah</p>
        </div>
        <div className='col-span-1 flex items-center'>
          <p className='font-medium'>Catatan</p>
        </div>
        <div className='col-span-1 flex items-center'>
          <p className='font-medium'>Status</p>
        </div>
      </div>

      {productData.map((product, key) => (
        <div
          className='grid grid-cols-8 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-10 md:px-6 2xl:px-7.5'
          key={key}
        >
          <div className='col-span-2 flex items-center'>
            <div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
              <div className='w-15 rounded-md'>
                <img src={product.image} alt='Product' />
              </div>
              <p className='text-sm text-black dark:text-white'>
                {product.name}
              </p>
            </div>
          </div>
          <div className='col-span-2 hidden items-center sm:flex'>
            <p className='text-sm text-black dark:text-white'>
              {product.phone}
            </p>
          </div>
          <div className='col-span-2 flex items-center'>
            <p className='text-sm text-black dark:text-white'>
              {product.address}
            </p>
          </div>
          <div className='col-span-1 flex items-center'>
            <p className='text-sm text-black dark:text-white'>
              {product.category}
            </p>
          </div>
          <div className='col-span-1 flex items-center'>
            <p className='text-sm text-black dark:text-white'>{product.sold}</p>
          </div>
          <div className='col-span-1 flex items-center'>
            <p className='text-sm text-black dark:text-white'>{product.note}</p>
          </div>
          <div className='col-span-1 flex items-center'>
            <p className='text-sm text-black dark:text-white'>
              {product.status}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableOne;
