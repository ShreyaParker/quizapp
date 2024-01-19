import Image from 'next/image'
import Navbar from "@/app/component/Navbar";
import PageRoute from "@/app/component/PageRoute";

import Topic from "@/app/component/Topic";

export default function Home() {
  return (
  <div className="flex flex-col mx-9">
    <Navbar/>
    <PageRoute/>
    <Topic/>


  </div>
  )
}
