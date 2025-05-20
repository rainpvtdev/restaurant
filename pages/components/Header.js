export default function Header() {
    return (
        <header>
            <nav className="bg-white shadow-lg fixed w-full z-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex-shrink-0 flex items-center">
                            <span className="text-2xl font-bold text-amber-600">Savory Bistro</span>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-center space-x-4">
                                <a href="#home"
                                    className="text-gray-900 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                                <a href="#about"
                                    className="text-gray-500 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
                                <a href="#menu"
                                    className="text-gray-500 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium">Menu</a>
                                <a href="#reservations"
                                    className="text-gray-500 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium">Reservations</a>
                                <a href="#contact"
                                    className="text-gray-500 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                            </div>
                        </div>
                        <div className="md:hidden">
                            <button id="mobile-menu-button"
                                className="text-gray-500 hover:text-amber-600 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                                <i className="fas fa-bars text-xl"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div id="mobile-menu" className="hidden md:hidden bg-white shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#home"
                            className="text-gray-900 hover:text-amber-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
                        <a href="#about"
                            className="text-gray-500 hover:text-amber-600 block px-3 py-2 rounded-md text-base font-medium">About</a>
                        <a href="#menu"
                            className="text-gray-500 hover:text-amber-600 block px-3 py-2 rounded-md text-base font-medium">Menu</a>
                        <a href="#reservations"
                            className="text-gray-500 hover:text-amber-600 block px-3 py-2 rounded-md text-base font-medium">Reservations</a>
                        <a href="#contact"
                            className="text-gray-500 hover:text-amber-600 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
                    </div>
                </div>
            </nav>
        </header>
    );
}