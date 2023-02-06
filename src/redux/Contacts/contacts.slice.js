import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: [],
    filters: '',
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialState,
    reducers: {
        contactsFilterAction: (state, {payload}) => {
            state.filters = payload;
        },
        deleteContactsAction: (state, {payload}) => {
            state.contacts.filter((contact => contact.id !== payload));
        },
        addNewContactsAction: (state, {payload}) => {
            state.contacts.push(payload);
        }
    }
});

export const {contactsFilterAction, deleteContactsAction, addNewContactsAction} = contactsSlice.actions;