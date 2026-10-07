import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <style jsx global>{`
        /* Custom CSS for elements that need more styling than Tailwind provides */
        /*     .hero {
            background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1517248135467-4dbc7e6667b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
            background-size: cover;
            background-position: center;
            height: 80vh;
        } */

        .hero {
            background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
            background-size: cover;
            background-position: center;
            transition: all 0.3s ease;
            height: 100vh;

        }

        .menu-item:hover .menu-item-overlay {
            opacity: 1;
            transform: translateY(0);
        }

        .menu-item-overlay {
            transition: all 0.3s ease;
            opacity: 0;
            transform: translateY(20px);
        }

        .parallax {
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }

        /* Animation for reservation success */
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .fade-in {
            animation: fadeIn 0.5s ease-out forwards;
        }
    `}</style>
      <section id="home" className="hero flex items-center justify-center text-center text-white pt-16">
        <div className="px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Experience Culinary Excellence</h1>
          <p className="text-xl md:text-2xl mb-8">Where passion meets flavor in every dish we serve</p>
          <a href="#reservations"
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 inline-block">Reserve
            a Table</a>
        </div>
      </section>
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="Restaurant interior" className="rounded-lg shadow-xl w-full h-auto" />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">A Tradition of Excellence</h3>
              <p className="text-gray-600 mb-4">Founded in 2005, Savory Bistro has been serving exceptional cuisine in
                the heart of the city. Our chef, with over 20 years of international experience, brings a unique
                fusion of traditional techniques and modern innovation to every dish.</p>
              <p className="text-gray-600 mb-6">We source only the finest seasonal ingredients from local farmers and
                producers, ensuring each meal is not only delicious but also supports our community.</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="bg-amber-100 p-3 rounded-full mr-3">
                    <i className="fas fa-utensils text-amber-600"></i>
                  </div>
                  <span className="font-medium">Seasonal Menus</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-amber-100 p-3 rounded-full mr-3">
                    <i className="fas fa-wine-glass-alt text-amber-600"></i>
                  </div>
                  <span className="font-medium">Extensive Wine List</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-amber-100 p-3 rounded-full mr-3">
                    <i className="fas fa-leaf text-amber-600"></i>
                  </div>
                  <span className="font-medium">Local Ingredients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="parallax bg-fixed py-32"
        style={{ "background-image": "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}>
        <div className="max-w-4xl mx-auto text-center bg-white bg-opacity-90 p-10 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Culinary Artistry on Every Plate</h3>
          <p className="text-gray-700 text-lg mb-8">Our chefs combine precision, passion, and creativity to transform
            simple ingredients into extraordinary dining experiences.</p>
          <a href="#menu"
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 inline-block">View
            Our Menu</a>
        </div>
      </section>

      <section id="menu" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Menu</h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Seasonal selections crafted with care and creativity</p>
          </div>

          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-md shadow-sm">
              <button type="button"
                className="menu-tab px-6 py-3 text-sm font-medium rounded-l-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-amber-500 focus:text-amber-600"
                data-tab="starters">
                Starters
              </button>
              <button type="button"
                className="menu-tab px-6 py-3 text-sm font-medium border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-amber-500 focus:text-amber-600"
                data-tab="mains">
                Main Courses
              </button>
              <button type="button"
                className="menu-tab px-6 py-3 text-sm font-medium border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-amber-500 focus:text-amber-600"
                data-tab="desserts">
                Desserts
              </button>
              <button type="button"
                className="menu-tab px-6 py-3 text-sm font-medium rounded-r-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-amber-500 focus:text-amber-600"
                data-tab="drinks">
                Drinks
              </button>
            </div>
          </div>

          <div id="starters" className="menu-content grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="menu-item bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 relative">
              <img src="https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Bruschetta" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Truffle Bruschetta</h3>
                <p className="text-gray-600 mb-4">Artisan bread topped with fresh tomatoes, basil, and black truffle
                  oil</p>
                <span className="text-amber-600 font-bold">$14</span>
              </div>
              <div
                className="menu-item-overlay absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-full">
                  Add to Order
                </button>
              </div>
            </div>

            <div
              className="menu-item bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 relative">
              <img src="https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Calamari" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Crispy Calamari</h3>
                <p className="text-gray-600 mb-4">Lightly fried squid served with lemon aioli and spicy marinara</p>
                <span className="text-amber-600 font-bold">$16</span>
              </div>
              <div
                className="menu-item-overlay absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-full">
                  Add to Order
                </button>
              </div>
            </div>

            <div
              className="menu-item bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 relative">
              <img src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="Salad" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Harvest Salad</h3>
                <p className="text-gray-600 mb-4">Mixed greens with roasted squash, pomegranate, goat cheese, and
                  pecans</p>
                <span className="text-amber-600 font-bold">$12</span>
              </div>
              <div
                className="menu-item-overlay absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-full">
                  Add to Order
                </button>
              </div>
            </div>
          </div>

          <div id="mains" className="menu-content hidden grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="menu-item bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 relative">
              <img src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Steak" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Filet Mignon</h3>
                <p className="text-gray-600 mb-4">8oz grass-fed beef with truffle mashed potatoes and seasonal
                  vegetables</p>
                <span className="text-amber-600 font-bold">$38</span>
              </div>
              <div
                className="menu-item-overlay absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-full">
                  Add to Order
                </button>
              </div>
            </div>

            <div
              className="menu-item bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 relative">
              <img src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1971&q=80"
                alt="Salmon" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Pan-Seared Salmon</h3>
                <p className="text-gray-600 mb-4">Wild-caught salmon with lemon beurre blanc and asparagus</p>
                <span className="text-amber-600 font-bold">$32</span>
              </div>
              <div
                className="menu-item-overlay absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-full">
                  Add to Order
                </button>
              </div>
            </div>

            <div
              className="menu-item bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 relative">
              <img src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Pasta" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Wild Mushroom Risotto</h3>
                <p className="text-gray-600 mb-4">Arborio rice with seasonal wild mushrooms and parmesan</p>
                <span className="text-amber-600 font-bold">$26</span>
              </div>
              <div
                className="menu-item-overlay absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-full">
                  Add to Order
                </button>
              </div>
            </div>
          </div>

          <div id="desserts" className="menu-content hidden grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="menu-item bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 relative">
              <img src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1927&q=80"
                alt="Chocolate cake" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Chocolate Soufflé</h3>
                <p className="text-gray-600 mb-4">Warm chocolate soufflé with vanilla bean ice cream</p>
                <span className="text-amber-600 font-bold">$12</span>
              </div>
              <div
                className="menu-item-overlay absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-full">
                  Add to Order
                </button>
              </div>
            </div>

            <div
              className="menu-item bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 relative">
              <img src="https://plus.unsplash.com/premium_photo-1722686461601-b2a018a4213b?q=80&w=2155&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Cheesecake" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Berry Cheesecake</h3>
                <p className="text-gray-600 mb-4">New York style with mixed berry compote</p>
                <span className="text-amber-600 font-bold">$10</span>
              </div>
              <div
                className="menu-item-overlay absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-full">
                  Add to Order
                </button>
              </div>
            </div>

            <div
              className="menu-item bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 relative">
              <img src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Crème brûlée" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Vanilla Crème Brûlée</h3>
                <p className="text-gray-600 mb-4">Classic French dessert with caramelized sugar crust</p>
                <span className="text-amber-600 font-bold">$11</span>
              </div>
              <div
                className="menu-item-overlay absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-full">
                  Add to Order
                </button>
              </div>
            </div>
          </div>

          <div id="drinks" className="menu-content hidden grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="menu-item bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 relative">
              <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Wine" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">House Wine Selection</h3>
                <p className="text-gray-600 mb-4">Glass of our sommelier's choice red or white</p>
                <span className="text-amber-600 font-bold">$12</span>
              </div>
              <div
                className="menu-item-overlay absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-full">
                  Add to Order
                </button>
              </div>
            </div>

            <div
              className="menu-item bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 relative">
              <img src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2157&q=80"
                alt="Cocktail" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Signature Cocktails</h3>
                <p className="text-gray-600 mb-4">Ask your server about our seasonal craft cocktails</p>
                <span className="text-amber-600 font-bold">$14</span>
              </div>
              <div
                className="menu-item-overlay absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-full">
                  Add to Order
                </button>
              </div>
            </div>

            <div
              className="menu-item bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 relative">
              <img src="https://plus.unsplash.com/premium_photo-1674327105074-46dd8319164b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="Coffee" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Artisan Coffee</h3>
                <p className="text-gray-600 mb-4">Locally roasted espresso and coffee selections</p>
                <span className="text-amber-600 font-bold">$6</span>
              </div>
              <div
                className="menu-item-overlay absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-full">
                  Add to Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reservations" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Make a Reservation</h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Book your table online for a seamless dining experience
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-lg p-8">
            <form id="reservation-form" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" id="name" name="name" required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500" />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">Number of
                    Guests</label>
                  <select id="guests" name="guests" required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500">
                    <option value="">Select</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6">6 People</option>
                    <option value="7">7 People</option>
                    <option value="8">8+ People</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input type="date" id="date" name="date" required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500" />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                  <select id="time" name="time" required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500">
                    <option value="">Select</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="11:30">11:30 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="12:30">12:30 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="13:30">1:30 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="17:30">5:30 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="special-requests" className="block text-sm font-medium text-gray-700 mb-1">Special
                  Requests</label>
                <textarea id="special-requests" name="special-requests" rows="3"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"></textarea>
              </div>
              <div className="flex items-center">
                <input id="newsletter" name="newsletter" type="checkbox"
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded" />
                <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                  Subscribe to our newsletter for special offers
                </label>
              </div>
              <div>
                <button type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
                  Reserve Table
                </button>
              </div>
            </form>

            <div id="reservation-success" className="hidden text-center py-8 fade-in">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <i className="fas fa-check text-green-600 text-xl"></i>
              </div>
              <h3 className="mt-3 text-lg font-medium text-gray-900">Reservation Confirmed!</h3>
              <p className="mt-2 text-sm text-gray-500">We've sent a confirmation to your email. See you soon!</p>
              <div className="mt-6">
                <button id="new-reservation"
                  className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
                  Make Another Reservation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">We'd love to hear from you. Reach out with any questions
              or special requests.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8 h-full">
                <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-amber-100 p-3 rounded-full">
                      <i className="fas fa-map-marker-alt text-amber-600"></i>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-gray-500">Address</h4>
                      <p className="text-base text-gray-800">123 Gourmet Avenue<br />New York, NY 10001</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-amber-100 p-3 rounded-full">
                      <i className="fas fa-phone-alt text-amber-600"></i>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-gray-500">Phone</h4>
                      <p className="text-base text-gray-800">(212) 555-1234</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-amber-100 p-3 rounded-full">
                      <i className="fas fa-envelope text-amber-600"></i>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-gray-500">Email</h4>
                      <p className="text-base text-gray-800">info@savorybistro.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-amber-100 p-3 rounded-full">
                      <i className="fas fa-clock text-amber-600"></i>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-gray-500">Hours</h4>
                      <p className="text-base text-gray-800">
                        Monday - Thursday: 11:00 AM - 10:00 PM<br />
                        Friday - Saturday: 11:00 AM - 11:00 PM<br />
                        Sunday: 10:00 AM - 9:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215373510328!2d-73.9878449241648!3d40.74844097138985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1689872026789!5m2!1sen!2sus"
                  width="100%" height="100%" style={{ "min-height": "400px;" }}
                  allowFullScreen="" loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Culinary Journey</h2>
          <p className="text-xl mb-8">Subscribe to our newsletter for exclusive offers, events, and chef's specials</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-gray-800 bg-white" />
            <button type="submit"
              className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
