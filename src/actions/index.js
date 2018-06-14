export const addPost = data => ({
  type: 'ADD_POST',
  data
})

export const deletePost = id => ({
    type: 'DELETE_POST',
    id
})

export const editPost = id => ({
    type: 'EDIT_POST',
    id
})

export const updatePost = data => (
    {
    type: 'UPDATE',
    id: data.id,
    data: data.data
})