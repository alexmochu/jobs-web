import { Fragment } from 'react'
import { Navigate } from 'react-router-dom';
import HeroSection from '../landingpage/HeroSection.jsx'
import Features from '../landingpage/Features.jsx'
import Stats from '../landingpage/Stats.jsx'
import Testimonials from '../landingpage/Testimonials.jsx'
import CallToAction from '../landingpage/CallToAction.jsx'
import Blog from '../landingpage/Blog.jsx'
import AppFooter from '../landingpage/AppFooter';

const App = () => {

  // eslint-disable-next-line no-constant-condition
  if (!true) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <Fragment>
        <HeroSection/>
        <Features/>
        <Stats/>
        <Testimonials/>
        <CallToAction/>
        <Blog/>
        <AppFooter/>
    </Fragment>
  );
};

export default App

