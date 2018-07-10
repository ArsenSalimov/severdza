export function addFeed(state, {items, total}) {
    state.items = state.items.concat(items);
    state.fullLoaded = state.items.length >= total;
}