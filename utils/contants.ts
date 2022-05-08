import { ListingAction } from './types';

export const ACTIONS: { [key in 'edit' | 'delete']: ListingAction } = {
  edit: {
    name: 'edit',
    icon: 'mdi-pencil',
    color: 'success',
    text: 'Edit'
  },
  delete: {
    name: 'delete',
    icon: 'mdi-delete-outline',
    color: 'error',
    text: 'Delete'
  }
};
