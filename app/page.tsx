import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SavoirFaire from '@/components/SavoirFaire';
import Process from '@/components/Process';
import Prestations from '@/components/Prestations';
import CollectionGrid from '@/components/CollectionGrid';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SavoirFaire />
      <Process />
      <Prestations />
      <CollectionGrid />
      <Stats />
      <Testimonials />
      <FAQ />
      <BookingForm />
      <Footer />
    </main>
  );
}
