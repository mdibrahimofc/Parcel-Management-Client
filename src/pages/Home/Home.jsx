import Banner from '@/components/Home/Banner'
import Feauture from '@/components/Home/Feauture'
import StatisticsCards from '@/components/Home/StatisticsCards'
import TopDeliveryMen from '@/components/Home/TopDeliveryMen'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> DropDesk | Home</title>
      </Helmet>
      <Banner/>
      <Feauture/>
      <StatisticsCards/>
      <TopDeliveryMen/>
    </div>
  )
}

export default Home
