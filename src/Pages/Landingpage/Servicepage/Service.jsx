/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';

import Footer from '../../../Components/Footer';
import CarlosTech from '../../../assets/carlos-tech.png';

const Service = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    type: '',
    amount: 1,
    note: '',
  });

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');

    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setFormData((prevData) => ({
        ...prevData,
        name: user.name,
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order submitted:', formData);
    alert('Pesanan telah selesai');
  };

  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <div className='flex items-center justify-start p-4'>
        <a href='/'>
          <FaArrowCircleLeft />
        </a>
      </div>
      <div className='flex flex-col items-center justify-center md:flex-row md:justify-center md:space-x-4 mt-4'>
        <div className='w-full max-w-md'>
          <div className='flex justify-center mb-4'>
            <img src={CarlosTech} className='w-1/2' />
          </div>
        </div>
        <div className='w-full max-w-md bg-black p-4 md:p-6 rounded-lg shadow-md overflow-y-auto'>
          <h2 className='text-2xl font-bold mb-4 text-center '>
            Formulir Pemesanan
          </h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-2'>
              <label className='block text-sm font-medium ' htmlFor='name'>
                Nama
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm'
                readOnly
              />
            </div>
            <div className='mb-2'>
              <label className='block text-sm font-medium ' htmlFor='phone'>
                Telepon
              </label>
              <input
                type='tel'
                id='phone'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-0'
                required
              />
            </div>
            <div className='mb-2'>
              <label className='block text-sm font-medium ' htmlFor='address'>
                Alamat
              </label>
              <textarea
                id='address'
                name='address'
                value={formData.address}
                onChange={handleChange}
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-0'
                required
              ></textarea>
            </div>
            <div className='mb-2'>
              <label className='block text-sm font-medium ' htmlFor='type'>
                Jenis Mesin
              </label>
              <select
                id='type'
                name='type'
                value={formData.type}
                onChange={handleChange}
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-0'
                required
              >
                <option value=''>Pilih jenis mesin</option>
                <option value='Alat Berat'>Alat Berat</option>
                <option value='Gigi Rasio Motor'>Gigi Rasio Motor</option>
                <option value='Gigi Rasio Mobil'>Gigi Rasio Mobil</option>
                <option value='Sparepart Pabrik'>Sparepart Pabrik</option>
              </select>
            </div>
            <div className='mb-2'>
              <label className='block text-sm font-medium ' htmlFor='amount'>
                Jumlah
              </label>
              <input
                type='number'
                id='amount'
                name='amount'
                value={formData.amount}
                onChange={handleChange}
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-0'
                min='1'
                required
              />
            </div>
            <div className='mb-2'>
              <label className='block text-sm font-medium ' htmlFor='note'>
                Catatan
              </label>
              <textarea
                id='note'
                name='note'
                value={formData.note}
                onChange={handleChange}
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-0'
              ></textarea>
            </div>
            <button
              type='submit'
              className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-0'
            >
              Pesan Sekarang
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service;
