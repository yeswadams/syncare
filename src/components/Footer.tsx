import { Link } from 'react-router-dom';

const Footer = () => { 
  return (

    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <span className="footer-title">Services</span>
        <Link to="/about" className="link link-hover">About Us</Link>
        <Link to="/services" className="link link-hover">Services</Link>
        <Link to="/contact" className="link link-hover">Contact</Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <Link to="/privacy" className="link link-hover">Privacy Policy</Link>
        <Link to="/terms" className="link link-hover">Terms of Service</Link>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="link link-hover">Twitter</a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="link link-hover">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="link link-hover">Instagram</a>
      </div>
      <div>
        <span className="footer-title">Contact Us</span>
        <p>Email: <a href="mailto:9rPbM@example.com" className="link link-hover">9rPbM@example.com</a></p>
        <p>Phone: <a href="tel:+1234567890" className="link link-hover">+1234567890</a></p>        
      </div>      
    </footer>
  )
}

export default Footer