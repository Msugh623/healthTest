import { lazy, Suspense } from 'react'
const Layout = lazy(() => import('./Layout'))

function App() {
 return <>
    <Suspense fallback={<div>Loading...</div>}>
      <Layout />
    </Suspense>
  </>
}

export default App
