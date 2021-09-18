export interface MatMenuListItem {
    menuLinkText: string;
    isDisabled: boolean;
}

export const AddNewCar: MatMenuListItem = {
    menuLinkText: 'Add new car',
    isDisabled: false
};

export const ViewRegistry: MatMenuListItem = {
    menuLinkText: 'View existing registry',
    isDisabled: false
};