function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 sm:px-8 py-3 sm:py-4 text-center">
      <p className="text-purple-300/40 text-sm">
        &copy; {new Date().getFullYear()} QR Scanner. Built by Arun.
      </p>
    </footer>
  );
}

export default Footer;
