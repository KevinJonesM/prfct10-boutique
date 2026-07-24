const getWebpSource = (source = "") => (
  /^\/images\/.+\.(?:png|jpe?g)$/i.test(source)
    ? source.replace(/\.(?:png|jpe?g)$/i, ".webp")
    : source
);

export default function OptimizedImage({ src, alt, onError, ...props }) {
  const optimizedSource = getWebpSource(src);

  const handleError = (event) => {
    if (optimizedSource !== src && event.currentTarget.getAttribute("src") !== src) {
      event.currentTarget.src = src;
      return;
    }

    onError?.(event);
  };

  return (
    <img
      {...props}
      src={optimizedSource}
      alt={alt}
      decoding={props.decoding || "async"}
      onError={handleError}
    />
  );
}

export { getWebpSource };
