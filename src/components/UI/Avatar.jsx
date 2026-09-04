function Avatar({src, alt}) {
  return (
    <img src={src} alt={alt} className="w-16 h-16 w-14 h-14 rounded-full ${className}" />
  );
}
export default Avatar;