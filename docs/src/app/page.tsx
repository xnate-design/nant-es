import { NavBar, Footer, HomeHero } from '@/components/layout';
import { Metadata } from 'next/types';
import { siteConfig } from '@/config/site';

export function generateMetadata(): Metadata {
  return {
    title: `home of ${siteConfig.title}`,
    description: `Home of ${siteConfig.title}, list of blog posts`
  };
}

export default function Home() {
  return (
    <div className='relative flex flex-col'>
      <NavBar />
      <div className='mt-10 min-h-[calc(100vh-_190px)]'>
        <HomeHero />
      </div>
      <Footer />
    </div>
  );
}
