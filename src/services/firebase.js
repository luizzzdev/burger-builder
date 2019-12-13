export const FirebaseService = {
  parseResponse(response) {
    return Object.keys(response).reduce((payload, id) => {
      const data = {
        ...payload[id],
        id,
      };
      payload.push(data);
      return payload;
    }, []);
  },
};
