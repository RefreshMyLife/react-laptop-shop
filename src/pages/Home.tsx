import React from 'react';
import { Sort, Categories, Skeleton, LaptopBlock, Pagination } from '../components';
import { useSelector } from 'react-redux';
import qs from 'qs';
import { useNavigate } from 'react-router';
import { sortList } from './../components/Sort';
import { useAppDispatch } from '../redux/store';
import { selectFilter } from '../redux/filters/selectors';
import { selectItems } from '../redux/laptop/selectors';
import { SearchLaptopArgs } from '../redux/laptop/types';
import { setCategoryId, setFilters, setPage } from '../redux/filters/slice';
import { fetchLaptops } from '../redux/laptop/asyncAction';

const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);
  const { items, status } = useSelector(selectItems);
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  //Если был первый рендер  то проверяем URl-параметры и сохраняем в редакс
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1)) as unknown as SearchLaptopArgs;
      const sort = sortList.find((obj) => obj.sortProperty === params.sortBy);
      dispatch(
        setFilters({
          categoryId: Number(params.category),
          sort: sort || sortList[0],
          searchValue: params.search,
          currentPage: Number(params.currentPage),
        }),
      );
      isSearch.current = true;
    }
  }, []);
  //Если изменились параметры и  был первый рендер
  React.useEffect(() => {
    if (isMounted.current) {
      const params = {
        sortProperty: sort.sortProperty,
        categoryId: categoryId > 0 ? categoryId : null,
        currentPage,
      };

      const queryString = qs.stringify(params, { skipNulls: true });

      navigate(`?${queryString}`);
    }
    if (window.location.search) {
      dispatch(fetchLaptops({} as SearchLaptopArgs));
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);
  //Если был первый рендер то запраашивае ноуты
  React.useEffect(() => {
    if (!isSearch.current) {
      setFetchLaptop();
    }
    isSearch.current = false;

    window.scrollTo(0, 0);
  }, [categoryId, sort, searchValue, currentPage]);

  const setFetchLaptop = async () => {
    const sortBy = sort.sortProperty.replace('-', '');
    const category = categoryId > 0 ? `&category=${categoryId}` : '';
    const activeSort = sort.sortProperty;
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      fetchLaptops({ activeSort, sortBy, search, category, currentPage: String(currentPage) }),
    );
  };
  const onClickCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (numberPage: number) => {
    dispatch(setPage(numberPage));
  };
  const laptops = items.map((obj: any) => <LaptopBlock key={obj.id} {...obj} />);
  const skeleton = [...new Array(4)].map((_, index) => <Skeleton key={index} />);
  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onClickCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все ноутбуки</h2>
      <div className="content__items">
        {status === 'error' ? (
          <div className="content__error-info">
            <h2>Ну приплыли :(</h2>
            <p>Произошло то, что не должно было происходить...</p>
          </div>
        ) : status === 'loading' ? (
          skeleton
        ) : (
          laptops
        )}
      </div>
      <Pagination onChangePage={onChangePage} currentPage={currentPage} />
    </div>
  );
};

export default Home;
