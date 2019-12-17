export default object => {
  const params = Object.keys(object)
    .reduce((queryParams, key) => {
      queryParams.push(
        `${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`
      );
      return queryParams;
    }, [])
    .join('&');

  return '?' + params;
};
