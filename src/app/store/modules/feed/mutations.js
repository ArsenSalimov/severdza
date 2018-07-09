export function addFeed(state, feedItems) {
     state.items = [...state.items, ...feedItems];
}