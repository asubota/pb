var mockData = (function() {
  return {
    query: query
  };

  function query() {
    return [
      {
        id: 1,
        firstName: 'firstName1',
        lastName: 'lastName1',
        email: 'email1@example.com'
      },
      {
        id: 1,
        firstName: 'firstName2',
        lastName: 'lastName2',
        email: 'email1@example.com'
      },
      {
        id: 1,
        firstName: 'firstName3',
        lastName: 'lastName3',
        email: 'email1@example.com'
      },
    ];
  }

})();
