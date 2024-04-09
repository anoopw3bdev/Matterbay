import './App.css'
import { useFetchData } from './hooks/useFetchData'
import { Feed } from './components/Feed';

export const App = () => {
  const { data, isLoading, error } = useFetchData();
  return (
    <>
      {isLoading && <div>Loading</div>}
      {error && <div>Error fetching data</div>}
      {data && <Feed data={data} />}
    </>
  )
}
