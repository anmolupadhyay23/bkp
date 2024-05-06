import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/Pages/HomePage';
import Login from './Components/Pages/Auth/Login';
import Register from './Components/Pages/Auth/Register';
import './App.css'
import NorthMandir from './Components/Pages/Mandir/NorthMandir';
import SouthMandir from './Components/Pages/Mandir/SouthMandir';
import EastMandir from './Components/Pages/Mandir/EastMandir';
import WestMandir from './Components/Pages/Mandir/WestMandir';
import BankeBihari from './Components/Pages/Mandir/North Mandir/BankeBihari';
import OurService from './Components/Pages/Services/OurService';
import Shops from './Components/Pages/Shop/Shops';
import Rudraksha from './Components/Pages/Shop/ShopPages/Rudraksha';
import PageNotFound from './Components/Pages/PageNotFound';
import OtpVerification from './Components/Pages/Auth/OtpVerification';
import NainaDevi from './Components/Pages/Mandir/North Mandir/NainaDevi';
import MansaDevi from './Components/Pages/Mandir/North Mandir/MataMansaDevi';
import VaishnoDevi from './Components/Pages/Mandir/North Mandir/VaishnoDevi';
import BajreshwariDevi from './Components/Pages/Mandir/North Mandir/BajreshwariDevi';
import KalkaJi from './Components/Pages/Mandir/North Mandir/KalkaJi';
import JwalaJi from './Components/Pages/Mandir/North Mandir/JwalaJi';
import Mahabodhi from './Components/Pages/Mandir/East Mandir/MahaBodhi';
import Jagannath from './Components/Pages/Mandir/East Mandir/Jagannath';
import Kamakhya from './Components/Pages/Mandir/East Mandir/Kamakhya';
import Lingaraj from './Components/Pages/Mandir/East Mandir/Lingraj';
import Birla from './Components/Pages/Mandir/East Mandir/Birla';
import Dakshineswar from './Components/Pages/Mandir/East Mandir/Dakshineswar';
import Dwarkadhish from './Components/Pages/Mandir/West Mandir/Dwarkadhish';
import Kailash from './Components/Pages/Mandir/West Mandir/Kailash';
import SiddhiVinayak from './Components/Pages/Mandir/West Mandir/Siddhivinayak';
import Mahalaxmi from './Components/Pages/Mandir/West Mandir/Mahalaxmi';
import Shanidev from './Components/Pages/Mandir/West Mandir/ShaniDev';
import Trimbakeshwar from './Components/Pages/Mandir/West Mandir/Trimbakeshwar';
import Virupaksha from './Components/Pages/Mandir/South Mandir/Virupaksha';
import Meenakshi from './Components/Pages/Mandir/South Mandir/Meenakshi';
import Ramanathaswamy from './Components/Pages/Mandir/South Mandir/Ramanathaswamy';
import Airavatesvara from './Components/Pages/Mandir/South Mandir/Airavatesvara';
import Brihadeeswara from './Components/Pages/Mandir/South Mandir/Brihadeeswara';
import Aihole from './Components/Pages/Mandir/South Mandir/Aihole';
import Books from './Components/Pages/Shop/ShopPages/Books';
import Yogastore from './Components/Pages/Shop/ShopPages/Yoga';
import Bodycare from './Components/Pages/Shop/ShopPages/Bodycare';
import Clothing from './Components/Pages/Shop/ShopPages/Clothing';
import Foodforfast from './Components/Pages/Shop/ShopPages/Foodfarfast';
import Spiritual from './Components/Pages/Shop/ShopPages/SpiritualAccessories';
import PujaSamagri from './Components/Pages/Shop/ShopPages/Pujasamagri';
import Donationcomingsoon from './Components/Pages/Donationcomingsoon/Donationcomingsoon';
import Healthandimmunity from './Components/Pages/Shop/ShopPages/Healthandimmunity';
import Yogamain from './Components/Pages/Yoga/yogamain';
import Sirasana from './Components/Pages/Yoga/asanas/sirasana';
import Sarvangasana from './Components/Pages/Yoga/asanas/sarvangasana';
import Halasana from './Components/Pages/Yoga/asanas/halasana';
import Shalabhasana from './Components/Pages/Yoga/asanas/shalabhasana';
import Paschimottanasana from './Components/Pages/Yoga/asanas/paschimottanasana';
import Bhujangasana from './Components/Pages/Yoga/asanas/bhujangasana';
import Dhanurasana from './Components/Pages/Yoga/asanas/dhanurasana';
import Matsyasana from './Components/Pages/Yoga/asanas/matsyasana';
import Trikonasana from './Components/Pages/Yoga/asanas/trikonasana';
import Ardhamatsyendrasana from './Components/Pages/Yoga/asanas/ardhamatsyendrasana';
import Mayurasana from './Components/Pages/Yoga/asanas/mayurasana';
import Padahasthasana from './Components/Pages/Yoga/asanas/padahasthasana';
import Aboutus from './Components/Pages/AboutUs/aboutus';
import MeditationMain from './Components/Pages/Meditation/meditationmain';
import Mindfulness from './Components/Pages/Meditation/meditations/mindful';
import Transcendental from './Components/Pages/Meditation/meditations/transcendental';
import Mantra from './Components/Pages/Meditation/meditations/mantra';
import Spiritualmeditation from './Components/Pages/Meditation/meditations/spiritual';
import Visualization from './Components/Pages/Meditation/meditations/visualization';
import Focused from './Components/Pages/Meditation/meditations/focused';
import WellnessPractice from './Components/Pages/Wellness/WellnessPractice';
import Blog from './Components/Pages/Blogs/blogs';

function App() {
  return (
    <>
      <Routes>

        {/* blogs   */}
        <Route path='/blogs' element={<Blog/>} />

        {/* Main */}
        <Route path='/' element={<HomePage />} />
        {/* <Route path='homepage-ajay' element={<Ajay/>}></Route> */}

        {/* Auth routes */}
        <Route path='/login' element={<Login />} />
        <Route path='/create-account' element={<Register />} />
        <Route path='/otp-verification' element={<OtpVerification />}  />

        {/* Mandir routes */}
        <Route path='/north-mandir' element={<NorthMandir />} />
        <Route path='/south-mandir' element={<SouthMandir />} />
        <Route path='/east-mandir' element={<EastMandir />} />
        <Route path='/west-mandir' element={<WestMandir />} />

        <Route path='/banke-bihari' element={<BankeBihari />} />
        <Route path='/naina-devi' element={<NainaDevi/>} />
        <Route path='/mansa-devi' element={<MansaDevi/>} />
        <Route path='/vaishno-devi' element={<VaishnoDevi/>} />
        <Route path='/bajreshwari-devi' element={<BajreshwariDevi/>} />
        <Route path='/kalkaji' element={<KalkaJi/>} />
        <Route path='/jwalaji' element={<JwalaJi/>} />
        <Route path='/mahabodhi' element={<Mahabodhi/>} />
        <Route path='/jagannath' element={<Jagannath/>} />
        <Route path='/kamakhya' element={<Kamakhya/>} />
        <Route path='/lingaraj' element={<Lingaraj/>} />
        <Route path='/birla' element={<Birla/>} />
        <Route path='/dakshineswar' element={<Dakshineswar/>} />
        <Route path='/dwarkadhish' element={<Dwarkadhish/>} />
        <Route path='/kailash' element={<Kailash/>} />
        <Route path='/siddhivinayak' element={<SiddhiVinayak/>} />
        <Route path='/mahalaxmi' element={<Mahalaxmi/>} />
        <Route path='/shanidev' element={<Shanidev/>} />
        <Route path='/trimbakeshwar' element={<Trimbakeshwar/>} />
        <Route path='/virupaksha' element={<Virupaksha/>} />
        <Route path='/meenakshi' element={<Meenakshi/>} />
        <Route path='/ramanathaswamy' element={<Ramanathaswamy/>} />
        <Route path='/airavatesvara' element={<Airavatesvara/>} />
        <Route path='/brihadeeswara' element={<Brihadeeswara/>} />
        <Route path='/aihole' element={<Aihole/>} />
        {/* Services routes */}
        <Route path='/our-services' element={<OurService />} />

        {/* Shops routes */}
        <Route path='/shops' element={<Shops />} />

        <Route path='/shops-books' element={<Books/>} />
        <Route path='/shops-yoga' element={<Yogastore/>} />
        <Route path='/shops-bodycare' element={<Bodycare/>} />
        <Route path='/shops-clothing' element={<Clothing/>} />
        <Route path='/shops-foodforfast' element={<Foodforfast/>} />
        <Route path='/shops/rudraksha' element={<Rudraksha />} />
        <Route path='/shops-spiritual' element={<Spiritual/>} />
        <Route path='/shops-pujasamagri' element={<PujaSamagri/>} />
        <Route path='/shops-healthandimmunity' element={<Healthandimmunity/>} />

        {/* Wellness Practices routes */}
        <Route path='/wellness-practice' element={<WellnessPractice />} />

        {/* Yoga routes */}
        <Route path='/yogamain' element={<Yogamain/>} />
        <Route path='/trikonasana' element={<Trikonasana/>} />
        <Route path='/sirasana' element={<Sirasana/>} />
        <Route path='/sarvangasana' element={<Sarvangasana/>} />
        <Route path='/halasana' element={<Halasana/>} />
        <Route path='/matsyasana' element={<Matsyasana/>} />
        <Route path='/paschimottanasana' element={<Paschimottanasana/>} />
        <Route path='/bhujangasana' element={<Bhujangasana/>} />
        <Route path='/shalabhasana' element={<Shalabhasana/>} />
        <Route path='/dhanurasana' element={<Dhanurasana/>} />
        <Route path='/ardhamatsyendrasana' element={<Ardhamatsyendrasana/>} />
        <Route path='/mayurasana' element={<Mayurasana/>} />
        <Route path='/padahasthasana' element={<Padahasthasana/>} />

        


        <Route path='/donationcomingsoon' element={<Donationcomingsoon/>} />
        <Route path='/aboutus' element={<Aboutus/>} />


        {/* Meditation routes */}
        <Route path='/meditation' element={<MeditationMain/>} />
        <Route path='/meditation-mindfulness' element={<Mindfulness/>} />
        <Route path='/meditation-transcendental' element={<Transcendental/>} />
        <Route path='/meditation-mantra' element={<Mantra/>} />
        <Route path='/meditation-spiritual' element={<Spiritualmeditation/>} />
        <Route path='/meditation-visualization' element={<Visualization/>} />
        <Route path='/meditation-focused' element={<Focused/>} />

        {/* Path not found */}
        <Route path='/*'  element={<PageNotFound />} />

      </Routes>
    </>
  );
}

export default App;
