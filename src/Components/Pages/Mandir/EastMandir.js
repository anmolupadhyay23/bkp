import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../../Layout/Navbar'
import MandirIntro from '../../Widgets/MandirWidgets/MandirIntro'
import MandirList from '../../Widgets/MandirWidgets/MandirList'
import MandirEnd from '../../Widgets/MandirWidgets/MandirEnd'
import Footer from '../../Widgets/HomeWidgets/Footer'
import NewNavbar from '../../Layout/NewNavbar'
import MandirCarousel from '../../Widgets/MandirWidgets/MandirCarousel'
import Images from '../../../Constants/constant'

var east_mandir = [
  {

    "region": "List of Mandir in East India",

    "page": 1,
    "btnText": "Read more",

    "img1": Images.mahabodhi,
    "name1": "Mahabodhi Temple",
    "place1": "(Bihar)",
    "content1": "The Mahabodhi Temple in Gaya is one of the earliest surviving brick Buddhist temples, making it influential in the development of brick architecture. This UNESCO World Heritage site was built on the banks of the Niranjana River around the sacred Bodhi tree.",
    "nav1": "/mahabodhi",

    "img2": Images.jagannath ,
    "name2": "Jagannath Temple",
    "place2": "(Odisha)",
    "content2": "Dedicated to Lord Jagannath, an incarnation of Lord Krishna, this temple in Puri is one of the sites of the revered Char Dham Yatra. The temple's origin is rooted in ancient Hindu texts like the Puranas, with some dating back to the 12th century AD.",
    "nav2": "/jagannath",

    "img3": Images.kamakhya,
    "name3": "Kamakhya Temple",
    "place3": "(Assam)",
    "content3": "Tucked away in the Nilachal Hills in Guwahati, Kamakhya Temple is the oldest of the 51 Shakti Peethas in India. The temple honours Maa Kamakhya or Kameswari, the Hindu Goddess of desire, and it is considered the most sacred pilgrimage site among her devotees.",
    "nav3": "/kamakhya",

    "img4": Images.lingraj,
    "name4": "Lingraj Temple",
    "place4": "(Odisha)",
    "content4": "Regarded as the largest and the most sacred place in Bhubaneswar, Lingaraj Temple is devoted to Lord Harihara and signifies the syncretism of Vaishnavism and Shaivism. The details about the temple's formation remain uncertain, with ancient texts.",
    "nav4": "/lingaraj",

    "img5": Images.birla,
    "name5": "Birla Mandir",
    "place5": "(West Bengal)",
    "content5": "This temple in Kolkata has become a major tourist spot for its majestic design. Constructed by the industrialist Birla family, it is relatively young in this list as it opened in 1966. The temple is dedicated to the Lord Krishna and Radha.",
    "nav5": "/birla",

    "img6": Images.dakshineshwar,
    "name6": "Dakshineswar Kali Temple",
    "place6": "(West Bengal)",
    "content6": "Dakshineswar Kali Temple is another architectural gem in Kolkata. The temple is primarily dedicated to Goddess Kali, but the complex also has a Vishnu and 12 Shiva temples. The construction of the Kali Temple started in 1847 under the patronage of Rani Rashmoni.",
    "nav6": "/dakshineswar",

  },
  {

    "region": "List of Mandir in East India",

    "page": 2,
    "btnText": "Read more",

    "img1": Images.mahabodhi,
    "name1": "Mahabodhi Temple",
    "place1": "(Bihar)",
    "content1": "The Mahabodhi Temple in Gaya is one of the earliest surviving brick Buddhist temples, making it influential in the development of brick architecture. This UNESCO World Heritage site was built on the banks of the Niranjana River around the sacred Bodhi tree.",
    "nav1": "/mahabodhi",

    "img2": Images.jagannath ,
    "name2": "Jagannath Temple",
    "place2": "(Odisha)",
    "content2": "Dedicated to Lord Jagannath, an incarnation of Lord Krishna, this temple in Puri is one of the sites of the revered Char Dham Yatra. The temple's origin is rooted in ancient Hindu texts like the Puranas, with some dating back to the 12th century AD.",
    "nav2": "/jagannath",

    "img3": Images.kamakhya,
    "name3": "Kamakhya Temple",
    "place3": "(Assam)",
    "content3": "Tucked away in the Nilachal Hills in Guwahati, Kamakhya Temple is the oldest of the 51 Shakti Peethas in India. The temple honours Maa Kamakhya or Kameswari, the Hindu Goddess of desire, and it is considered the most sacred pilgrimage site among her devotees.",
    "nav3": "/kamakhya",

    "img4": Images.lingraj,
    "name4": "Lingraj Temple",
    "place4": "(Odisha)",
    "content4": "Regarded as the largest and the most sacred place in Bhubaneswar, Lingaraj Temple is devoted to Lord Harihara and signifies the syncretism of Vaishnavism and Shaivism. The details about the temple's formation remain uncertain, with ancient texts.",
    "nav4": "/lingaraj",

    "img5": Images.birla,
    "name5": "Birla Mandir",
    "place5": "(West Bengal)",
    "content5": "This temple in Kolkata has become a major tourist spot for its majestic design. Constructed by the industrialist Birla family, it is relatively young in this list as it opened in 1966. The temple is dedicated to the Lord Krishna and Radha.",
    "nav5": "/birla",

    "img6": Images.dakshineshwar,
    "name6": "Dakshineswar Kali Temple",
    "place6": "(West Bengal)",
    "content6": "Dakshineswar Kali Temple is another architectural gem in Kolkata. The temple is primarily dedicated to Goddess Kali, but the complex also has a Vishnu and 12 Shiva temples. The construction of the Kali Temple started in 1847 under the patronage of Rani Rashmoni.",
    "nav6": "/dakshineswar",

  },
  {

    "region": "List of Mandir in East India",

    "page": 3,
    "btnText": "Read more",

    "img1": Images.mahabodhi,
    "name1": "Mahabodhi Temple",
    "place1": "(Bihar)",
    "content1": "The Mahabodhi Temple in Gaya is one of the earliest surviving brick Buddhist temples, making it influential in the development of brick architecture. This UNESCO World Heritage site was built on the banks of the Niranjana River around the sacred Bodhi tree.",
    "nav1": "/mahabodhi",

    "img2": Images.jagannath ,
    "name2": "Jagannath Temple",
    "place2": "(Odisha)",
    "content2": "Dedicated to Lord Jagannath, an incarnation of Lord Krishna, this temple in Puri is one of the sites of the revered Char Dham Yatra. The temple's origin is rooted in ancient Hindu texts like the Puranas, with some dating back to the 12th century AD.",
    "nav2": "/jagannath",

    "img3": Images.kamakhya,
    "name3": "Kamakhya Temple",
    "place3": "(Assam)",
    "content3": "Tucked away in the Nilachal Hills in Guwahati, Kamakhya Temple is the oldest of the 51 Shakti Peethas in India. The temple honours Maa Kamakhya or Kameswari, the Hindu Goddess of desire, and it is considered the most sacred pilgrimage site among her devotees.",
    "nav3": "/kamakhya",

    "img4": Images.lingraj,
    "name4": "Lingraj Temple",
    "place4": "(Odisha)",
    "content4": "Regarded as the largest and the most sacred place in Bhubaneswar, Lingaraj Temple is devoted to Lord Harihara and signifies the syncretism of Vaishnavism and Shaivism. The details about the temple's formation remain uncertain, with ancient texts.",
    "nav4": "/lingaraj",

    "img5": Images.birla,
    "name5": "Birla Mandir",
    "place5": "(West Bengal)",
    "content5": "This temple in Kolkata has become a major tourist spot for its majestic design. Constructed by the industrialist Birla family, it is relatively young in this list as it opened in 1966. The temple is dedicated to the Lord Krishna and Radha.",
    "nav5": "/birla",

    "img6": Images.dakshineshwar,
    "name6": "Dakshineswar Kali Temple",
    "place6": "(West Bengal)",
    "content6": "Dakshineswar Kali Temple is another architectural gem in Kolkata. The temple is primarily dedicated to Goddess Kali, but the complex also has a Vishnu and 12 Shiva temples. The construction of the Kali Temple started in 1847 under the patronage of Rani Rashmoni.",
    "nav6": "/dakshineswar",

  },

]

const EastMandir = () => {
  return (
    <Box>
      <NewNavbar />
      <MandirIntro mandir_type={'East India Mandir'} mandir_image={"url('https://res.cloudinary.com/dmfhdyvji/image/upload/f_auto,q_auto/v1/bkp/images/mandir/zd2ptvqncv2tmo65h9r3')"} />
      {/* <MandirList mandir={east_mandir} /> */}
      <MandirCarousel item={east_mandir} />
      <MandirEnd curve={true} />
      <Footer />
    </Box>
  )
}

export default EastMandir
