export default {
  entities: {
    users: {},
  },
  result: {
    users: [],
  },
  isFetching: {
    userList: false,
  },
  error: {
    userList: null,
  },
  pagination: {
    userList: {
      sortBy: null,
      descending: false,
      rowsPerPage: 10,
    }
  },
};
