const selectIsLoggedIn = state => state.auth.isLoggedIn;

const selectUserName = state => state.auth.user.name;

export const selectIsLoading = state => state.auth.isLoading;

const authSelectors = { selectIsLoggedIn, selectUserName, selectIsLoading };

export default authSelectors;
