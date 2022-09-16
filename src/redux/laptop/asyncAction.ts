import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CartItem } from '../cart/types';
import { SearchLaptopArgs } from './types';

export const fetchLaptops = createAsyncThunk<CartItem[], SearchLaptopArgs>(
  'laptop/fetchLaptopStatus',
  async (params) => {
    const { currentPage, category, search, activeSort } = params;
    // axios.post(`https://62b8167df4cb8d63df586b74.mockapi.io/items`,{})
    // if(activeSort = 'price'){}

    const { data } = await axios.get<CartItem[]>(
      `https://62b8167df4cb8d63df586b74.mockapi.io/items?page=${currentPage}&limit=4${category}${search}&sortBy=${activeSort}&order=desc`,
    );
    return data;
  },
);
