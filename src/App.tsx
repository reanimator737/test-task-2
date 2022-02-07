import React, {useEffect} from 'react';
import {GlobalStyles, MainContainer} from './constans/theme';
import {useDispatch, useSelector} from 'react-redux';
import {getInfoFromContract} from './store/ethersData.reducer';
import {Loader} from './components/loader/loader';
import {CategoryList} from './components/category-list/categoryList';
import {Header} from './components/header/header';
import {Store} from './store/root.reducer';

/**
 * Application start point
 * While data is being loaded, the user sees statics and the loader
 */
function App() {
  const dispatch = useDispatch();
  const ethersData = useSelector((store: Store) => store.info);

  useEffect(() => {
    dispatch(getInfoFromContract());
  }, []);

  const CategoryLists = ethersData?.map((list) => (
    <CategoryList
      key={list.groupName}
      dataObjectArray={list.dataObjectArray}
      groupName={list.groupName}/>
  ));

  return (
    <>
      <GlobalStyles />
      <MainContainer>
        <Header/>
        <h1 className='bold'>
          All Indeces
        </h1>
        {ethersData ?
          CategoryLists :
          <Loader/>}
      </MainContainer>
    </>
  );
}

export default App;
