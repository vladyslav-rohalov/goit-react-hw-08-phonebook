const selectIsLoggedIn = state => state.auth.isLoggedIn;

const selectUserName = state => state.auth.user.name;

export const selectIsRefreshing = state => state.auth.isLoading;

const authSelectors = { selectIsLoggedIn, selectUserName, selectIsRefreshing };

export default authSelectors;
