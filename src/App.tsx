import { useState } from 'react'
import { Header } from './components/Header'; // adjust path if needed
// import your pages later
// import { HomePage } from './components/HomePage';
// import { BookPage } from './components/BookPage';
// import { ReviewsPage } from './components/ReviewsPage';
// import { ContactPage } from './components/ContactPage';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <div className="p-8 text-center">Home Page Content</div>;
      case 'book':
        return <div className="p-8 text-center">Book Page Content</div>;
      case 'reviews':
        return <div className="p-8 text-center">Reviews Page Content</div>;
      case 'contact':
        return <div className="p-8 text-center">Contact Page Content</div>;
      default:
        return <div className="p-8 text-center">Home Page Content</div>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <Header activeSection={activeSection} onSectionChange={setActiveSection} />

      {/* Main content */}
      <main className="bg-white">{renderContent()}</main>

      {/* Footer placeholder */}
      <footer className="bg-slate-900 text-white py-16 text-center mt-12">
        <p className="text-slate-400">Footer will go here</p>
      </footer>
    </div>
  );
}