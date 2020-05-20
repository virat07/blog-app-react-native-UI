import createDataComtext from '../context/createDataComtext';
import jsonServer from '../api/jsonServer';
const blogReducer = (state, action) => {
    switch (action.type) {

        case 'get_BlogPost':
            return action.payload;

        case 'delete_BlogPost':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        case 'edit_BlogPost':
            return state.map((blogPost) => {
                if (blogPost.id === action.payload.id) return action.payload
                else return blogPost;
            })

        default:
            return
    };
};

const getBlogPost = (dispatch) => {
    return async (callback) => {
        const response = await jsonServer.get('/blogposts');
        //response.data === [{},{}]
        // {}=>blogpost
        dispatch({
            type: 'get_BlogPost', payload: response.data
        })
    };
};


const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        const response = await jsonServer.post('/blogposts', { title, content });
        callback();
    };
};

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        const response = await jsonServer.delete(`/blogposts/${id}`)
        dispatch({ type: 'delete_BlogPost', payload: id })
    };
};

const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        const response = await jsonServer.put(`blogposts/${id}`, { title, content })
        dispatch({ type: 'edit_BlogPost', payload: { id, title, content } });
        callback();
    };
};

export const { Context, Provider } = createDataComtext(blogReducer, { getBlogPost, addBlogPost, deleteBlogPost, editBlogPost }, []);
