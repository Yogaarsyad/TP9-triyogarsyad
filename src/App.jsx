import { useState, useEffect } from 'react';
import './App.css';

// 1. Navbar Component
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    
    // Animasi tombol yang diklik
    e.target.classList.add('click-animation');
    setTimeout(() => {
      e.target.classList.remove('click-animation');
    }, 300);

    if (element) {
      void element.offsetWidth;
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      setTimeout(() => {
        element.classList.add('section-highlight');
        setTimeout(() => {
          element.classList.remove('section-highlight');
        }, 1000);
      }, 500);
    }
    setIsMenuOpen(false);
  };

  const handleExit = (e) => {
    e.preventDefault();


    // Animasi exit
    e.target.classList.add('exit-animation');
    document.documentElement.classList.add('redirect-animation');
    
    if(window.confirm('Are you sure you want to leave?')) {
      setTimeout(() => {
        window.location.href = 'https://www.google.com';
      }, 500);
    } else {
      // Hapus animasi jika dibatalkan
      document.documentElement.classList.remove('redirect-animation');
      e.target.classList.remove('exit-animation');
    }
  };
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 w-full">
      <div className="w-full px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold flex">
              {"Tri Yoga Arsyad".split("").map((letter, index) => (
                <span 
                  key={index}
                  className="animate-color-wave"
                  style={{ 
                    animationDelay: `${index * 0.2}s`, // Diperlambat dari 0.1 ke 0.2
                    backgroundImage: `linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b, #3b82f6)`,
                    backgroundSize: '300% 100%'
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>



          {/* Menu desktop */}
          <div className="hidden md:flex space-x-6">
            <a 
              href="#home" 
              onClick={(e) => handleClick(e, 'home')}
              className="nav-link text-gray-600 hover:text-blue-600 transition-all px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a 
              href="#articles" 
              onClick={(e) => handleClick(e, 'articles')}
              className="nav-link text-gray-600 hover:text-blue-600 transition-all px-3 py-2 rounded-md text-sm font-medium"
            >
              Articles
            </a>
            <a 
              href="#counter" 
              onClick={(e) => handleClick(e, 'counter')}
              className="nav-link text-gray-600 hover:text-blue-600 transition-all px-3 py-2 rounded-md text-sm font-medium"
            >
              Counter
            </a>
            <a 
              href="#exit" 
              onClick={handleExit}
              className="nav-link text-red-600 hover:text-red-700 transition-all px-3 py-2 rounded-md text-sm font-medium group relative"
            >
              Exit
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Tombol hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#home" 
              onClick={(e) => handleClick(e, 'home')}
              className="nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50"
            >
              Home
            </a>
            <a 
              href="#articles" 
              onClick={(e) => handleClick(e, 'articles')}
              className="nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50"
            >
              Articles
            </a>
            <a 
              href="#counter" 
              onClick={(e) => handleClick(e, 'counter')}
              className="nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50"
            >
              Counter
            </a>
            <a 
              href="#exit" 
              onClick={handleExit}
              className="nav-link block px-3 py-2 rounded-md text-base font-medium text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              Exit
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}




// 2. Card Component
function ArticleGrid() {
  const posts = [
    {
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
      image: "https://picsum.photos/500?random=1"
    },
    {
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis",
      image: "https://picsum.photos/500?random=2"
    },
    {
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
      image: "https://picsum.photos/500?random=3"
    },
    {
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure",
      image: "https://picsum.photos/500?random=4"
    },
    {
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque",
      image: "https://picsum.photos/500?random=5"
    }
  ];

  return (
    <section id="articles" className="bg-gray-50 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <article 
              key={post.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden transition duration-500 hover:scale-105 hover:shadow-xl"
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 line-clamp-3">{post.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}







// 3. Counter Component
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if(count !== 0 && count % 10 === 0) {
      alert(`${count} adalah kelipatan 10!`);
    }
  }, [count]);

  return (
    <section id="counter" className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-xs mx-auto bg-gray-100 p-8 rounded-xl shadow-inner">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Counter: {count}</h2>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setCount(c => c + 1)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              +
            </button>
            <button
              onClick={() => setCount(c => c - 1)}
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              -
            </button>
            <button
              onClick={() => setCount(0)}
              className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-2 rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}




// Main App
function MainApp() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section 
          id="home" 
          className="min-h-screen flex items-center justify-center relative overflow-hidden"
          style={{
            backgroundImage: `url('https://picsum.photos/1920/1080?nature')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
          
          <div className="text-center px-4 relative z-10">
            <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in-up">
              Welcome to MyBlog
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8 animate-fade-in-up delay-100">
              Discover amazing articles and try my interactive counter!
            </p>
            <button 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('articles')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg shadow-2xl transition-all hover:scale-105 animate-fade-in-up delay-200 text-lg font-semibold"
            >
              Explore Articles
            </button>
          </div>
        </section>
        <ArticleGrid />
        <Counter />
      </main>
    </div>
  );
}



export default MainApp;