import { Fragment } from 'react'
import { Navigate } from 'react-router-dom';
import HeroSection from '../landingpage/HeroSection.jsx'
import Features from '../landingpage/Features.jsx'
import Stats from '../landingpage/Stats.jsx'
import Testimonials from '../landingpage/Testimonials.jsx'
import CallToAction from '../landingpage/CallToAction.jsx'
import Blog from '../landingpage/Blog.jsx'

const App = () => {

  // eslint-disable-next-line no-constant-condition
  if (!true) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <Fragment>
      <main className="space-y-40 mb-40">
        <HeroSection/>
        <Features/>
        <Stats/>
        <Testimonials/>
        <CallToAction/>
        <Blog/>
      </main>
    </Fragment>
  );
};

export default App

