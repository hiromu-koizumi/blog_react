import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash'

//値をapi経由で取得しstoreに保存している

export const fetchPosts =  () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({type:'FETCH_POSTS',payload: response.data}); 
};

export const fetchUser = id => async dispatch => {
  _fetchUser(id,dispatch)
};

//同じユーザーIDは一度だけ取得するようにしている
const _fetchUser = _.memoize(async (id, dispatch) =>{
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({type:'FETCH_USERS',payload: response.data});  
})

