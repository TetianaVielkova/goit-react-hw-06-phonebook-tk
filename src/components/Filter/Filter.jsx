import { useDispatch, useSelector } from 'react-redux';
import { contactsFilterAction } from './../../redux/Contacts/contacts.slice';
import {Input, Label} from './Filter.styled'

export const Filter = () => {
    const filters = useSelector((state) => state.contacts.filter);
    const dispatch = useDispatch();

    const handelFilterContact = filters => {
        dispatch(contactsFilterAction(filters));
    }
    
    return(
        <div>
            <Label>Find contacts by name
                <Input
                autoComplete="off"
                type="text"
                name="filter"
                value={filters}
                onChange={(event) => handelFilterContact(event.target.value)}
                />
            </Label>
        </div>
    )
}