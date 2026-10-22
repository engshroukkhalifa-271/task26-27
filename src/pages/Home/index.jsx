import HomeForm from '../../components/HomeForm'
import Sidebar  from '../../components/Sidebar'

import "./index.css"
const Home = () => {
  return (
    <main className="bg-">
      <div className='bg-white p-4 flex gap-12'>
      <Sidebar/>
      <HomeForm/>
      </div>
    </main>
  )
}

export default Home
