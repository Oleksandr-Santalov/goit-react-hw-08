import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectIsAdd = (state) => state.contacts.isAdd;
export const selectIsDel = (state) => state.contacts.isDel;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filters) => {
    return contacts.filter((contact) => {
      return (
        contact.name.toLowerCase().includes(filters.toLowerCase()) ||
        contact.number.includes(filters)
      );
    });
  }
);
