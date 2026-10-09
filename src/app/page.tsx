import Image from "next/image";
import MainSlider from "./_components/mainslider/mainslider";
import CategorySlider from "./_components/categoryslider/categoryslider";
import AllProducts from "./_components/AllProducts/AllProducts";
import HomeCards from "./_components/homeCards/HomeCards";
import Offers from "./_components/offers/Offers";

export default function Home() {
  return (
   <>
 <MainSlider/>
 <HomeCards/>
 
  <CategorySlider/> 
 
  <Offers/>

  <AllProducts/>
   </>
  );
}
