const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 py-4">
      <div className="container mx-auto flex items-center justify-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
