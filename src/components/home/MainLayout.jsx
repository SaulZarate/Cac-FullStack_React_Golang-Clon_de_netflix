import React, { useEffect } from 'react'
import useApi from '../../hooks/useApi';
import { apiEntity } from '../../services/theMoviDB.config';
import Banner from '../banner/Banner';

const MainLayout = () => {

  const [movie, loading, error, randomMovie, backImg] = useApi(apiEntity.popularMovies)
  const [tv, loadingTv, errorTv, randomTv, backImgTv] = useApi(apiEntity.popularTv)

  return (
    <main className='contentMain'>

      {!loading && randomMovie && <Banner movie={randomMovie} urlImage={backImg} />}

      
    </main>
  )
}

export default MainLayout