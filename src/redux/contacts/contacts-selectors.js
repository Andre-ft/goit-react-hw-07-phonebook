export const getFilter = state => state.contacts.filter;
export const getItems = state => state.contacts.items;

export const getVisibleContacts = state => {
  const allContacts = getItems(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};
