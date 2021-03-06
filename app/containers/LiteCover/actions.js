import { COVER_DATA_LOADED, INITIALIZE_COVER, BUY_COVER } from './constants';

export function initializeCover() {
  return {
    type: INITIALIZE_COVER,
  };
}

export function coverDataLoaded(payload) {
  return {
    type: COVER_DATA_LOADED,
    payload,
  };
}

export function buyCover(payload) {
  return {
    type: BUY_COVER,
    payload,
  };
}
