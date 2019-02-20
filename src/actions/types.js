/*******************/
/*     types       */
/*******************/

//--------------------
//auth
//--------------------
export const LOGIN_LOCAL = 'LOGIN_LOCAL';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_GOOGLE = 'LOGIN_GOOGLE';
export const LOGIN_FACEBOOK = 'LOGIN_FACEBOOK';

export const REGISTER = 'REGISTER';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';

//--------------------
//location
//--------------------
export const UPDATE_LOCATION = 'UPDATE_LOCATION';
export const SHOW_MY_LOCATION = 'SHOW_MY_LOCATION';

//--------------------
//search
//--------------------
export const GET_SEARCH_INPUT = 'GET_SEARCH_INPUT';
export const CLEAR_SEARCH_INPUT = 'CLEAR_SEARCH_INPUT';
export const GET_SEARCH_SUGGESTIONS = 'GET_SEARCH_SUGGESTIONS';
export const GET_SELECTED_VENUE = 'GET_SELECTED_VENUE';
export const GET_GENERAL_VENUES = 'GET_GENERAL_VENUES';
export const TOGGLE_SEARCH_LIST = 'TOGGLE_SEARCH_LIST';

//--------------------
//menu
//--------------------
export const GET_RECOMMENDATIONS = 'GET_RECOMMENDATIONS';
export const CLEAR_RECOMMENDATIONS = 'CLEAR_RECOMMENDATIONS';

//--------------------
//hotspots
//--------------------
export const LOAD_HOTSPOTS = 'LOAD_HOTSPOTS';
export const LOAD_HOTSPOTS_SUCCESS = 'LOAD_HOTSPOTS_SUCCESS';
export const LOAD_HOTSPOTS_ERROR = 'LOAD_HOTSPOTS_ERROR';
export const CREATE_HOTSPOT = 'CREATE_HOTSPOT';
export const CREATE_HOTSPOT_SUCCESS = 'CREATE_HOTSPOT_SUCCESS';
export const CREATE_HOTSPOT_ERROR = 'CREATE_HOTSPOT_ERROR';
export const CANCEL_HOTSPOT = 'CANCEL_HOTSPOT';

//--------------------
//comments
//--------------------
export const LOAD_COMMENTS = 'LOAD_COMMENTS';
export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_ERROR = 'LOAD_COMMENTS_ERROR';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS';
export const CREATE_COMMENT_ERROR = 'CREATE_COMMENT_ERROR';

//--------------------
//gallery
//--------------------
export const SAVE_IMAGE = 'SAVE_IMAGE';
export const FLUSH_IMAGE = 'FLUSH_IMAGE';
export const UPLOAD_IMAGE = 'UPLOAD_IMAGE';
export const UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS';
export const UPLOAD_IMAGE_ERROR = 'UPLOAD_IMAGE_ERROR';
export const GET_USER_GALLERY = 'GET_USER_GALLERY';
export const GET_USER_GALLERY_SUCESS = 'GET_USER_GALLERY_SUCESS';
export const GET_USER_GALLERY_ERROR = 'GET_USER_GALLERY_ERROR';
