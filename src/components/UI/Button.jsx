function Button ({children, className}) {
    return (
    <button 
    className={`bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-600 transition duration-300 ${className}`}>
   {children}
    </button>
  );
}
export default Button;