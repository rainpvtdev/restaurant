export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Savory Bistro</h3>
                        <p className="text-gray-400">Elevating dining experiences through passion, creativity, and exceptional
                            service since 2005.</p>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#home" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-white transition duration-300">About</a>
                            </li>
                            <li><a href="#menu" className="text-gray-400 hover:text-white transition duration-300">Menu</a></li>
                            <li><a href="#reservations"
                                className="text-gray-400 hover:text-white transition duration-300">Reservations</a></li>
                            <li><a href="#contact"
                                className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy
                                Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Terms of
                                Service</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Cookie Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                <i className="fab fa-facebook-f text-xl"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                <i className="fab fa-instagram text-xl"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                <i className="fab fa-twitter text-xl"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                <i className="fab fa-yelp text-xl"></i>
                            </a>
                        </div>
                        <div className="mt-6">
                            <a href="#"
                                className="inline-flex items-center text-gray-400 hover:text-white transition duration-300">
                                <i className="fas fa-gift mr-2"></i>
                                <span>Gift Cards</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8">
                    <p className="text-gray-400 text-sm text-center">&copy; 2023 Savory Bistro. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}