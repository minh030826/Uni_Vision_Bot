import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';
const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="UNI VISION BOT" className="h-10 w-auto" />
          <h2 className="text-2xl font-bold text-black">UNI VISION BOT</h2>
        </Link>
        <nav>
          <ul className="flex space-x-10 items-center">
            <li><Link to="/" className="text-gray-700 hover:text-gray-900">Trang chủ</Link></li>
            <li><Link to="/careers" className="text-gray-700 hover:text-gray-900">Các ngành nghề</Link></li>
            <li><Link to="/career-guidance-test" className="text-gray-700 hover:text-gray-900">Trắc nghiệm hướng nghiệp</Link></li>
            <li><Link to="/what-to-study" className="text-gray-700 hover:text-gray-900">Học nghề gì</Link></li>
            <li><Link to="/login" className="text-gray-700 hover:text-gray-900">Đăng nhập</Link></li>
            <li>
              <Link to="/register" className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
                Đăng ký
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;