import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import VideoTile from "../components/videotile";
import Gurus from "../components/gurus";

const Home = () => {
  return (
    <>
      <Head>
        <title>Divya Babaji Sushumna Kriya Yoga</title>
        <meta
          name="description"
          content="Divya babaji Sushumna Kriya Yoga"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <Gurus />
      {/* <SectionTitle
        pretitle="Sushumna Kriya Benefits"
        title=" Why should one Meditate">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis dui lacus, 
        eget fermentum tellus placerat non. Pellentesque blandit sed mauris ut facilisis. 
        Pellentesque sit amet varius metus. Fusce sed.
      </SectionTitle> */}
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video />
      {/* <VideoTile /> */}
      {/* <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials /> */}
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
      During your Sushumna Kriya Yoga practice, you might have various questions. Below are a few, and for more FAQs, please click here.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;