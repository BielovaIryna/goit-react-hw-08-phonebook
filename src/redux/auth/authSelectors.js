

export const selectUser = state => state.auth.contacts;
export const selectUserAuth = state => state.auth.authenticated;
export const selectUserIsLoading = state => state.auth.isLoading;
export const selectUserError =state=>state.auth.error


