//action creator, when called the return action will be automatically dispatched for us
//and sent to all diff reducers
//this function is action creator.

export const selectLibrary = (libraryId) => {
  return { //returning plain js object
    type: 'select_library',
    payload: libraryId //instructing which id to be select
  };
};
