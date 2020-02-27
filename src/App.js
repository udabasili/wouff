import React from 'react';
import Header from './components/header.component';
import Navigation from './components/navigation.component';
import About from './components/about.component';
import Service from './components/service.component';
import Staff from './components/staff.component';
import Contact from './components/contact.component';
import Location from './components/location.component';
import Review from './components/review.component';



function App() {
  return (
    <div className="App">
      <Navigation/>
      <Header/>
      <main>
        <About/>
        <Service/>
        <Staff/>
        <Location/>
        <Review/>
        <Contact/>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
