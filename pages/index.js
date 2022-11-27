import Image from "next/image"


import Business from "../components/Business"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Bta from "../components/Bta"


import bizz1 from '../public/bizz1.png'
import sportteamup from '../public/spot-team-up.png'
import sportcont from '../public/sportcont.png'
import bizz2 from '../public/bizz2.png'
import bizz3 from '../public/bizz3.png'
import workflow  from '../public/workflow.png'
import bizz4 from '../public/bizz4.png'


export default function Home() {
  return (
    <div className='md:px-12  py-3  '>
      <Header/>
      <Hero/>
     <Business image1={bizz1} image2={sportteamup} title={"Team up without the chaos"} desc={'Connect your teams, projects, and docs in Notion — so you can bust silos and move as one.'} />

     <Business image1={bizz2} image2={sportcont} title={"Never ask “What’s the context?” again"} desc={"Stale wikis aren't helpful. Neither are floating docs. In Notion, your daily work and knowledge live side by side — so you never lose context."} />

     <Business image1={bizz3} image2={workflow} title={"Build the workflow you want"} desc={"Customize Notion to make it work the way you want it to. Just drag and drop to craft the dashboard, website, doc, or system you need."} />

     <Business image1={bizz4} image2={workflow} 
     title={"Benefit from a global ecosystem of creator's tools"} 
     desc={"Get inspiration from thousands of community-made templates, integrations, and events. You'll never want for resources or support."} />

    <Bta title="Get Notion free"/>

    </div>
    
  )
}
