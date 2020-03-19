import * as APIUtil from "../util/user_api_util";
export const RECEIVE_ALL_EVENTS = "RECEIVE_ALL_EVENTS";
export const RECEIVE_USER_DATA = "RECEIVE_USER_DATA";

export const receiveAllEvents = events => ({
  type: RECEIVE_ALL_EVENTS,
  events: events
});

export const receiveUserData = data => ({
  type: RECEIVE_ALL_DATA,
  data: data
});
