import { Layout } from '@/components/Layout/Layout'
import Main from '@/components/Main/Main'
import { Route, Routes } from 'react-router-dom'
export default function App(){
  return(
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />}/>
        </Route>
      </Routes>
    </>
  )
}