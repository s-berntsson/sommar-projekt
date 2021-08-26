export function addItem(item) {
    return { type: "ADD_ITEM", item: item };
}  // actions = plain objects containing description of event
    // must have a 'type'-property 
    // pass simple data with it, not functions etc.