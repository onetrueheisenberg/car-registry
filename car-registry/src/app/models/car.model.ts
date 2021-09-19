export interface Car {
    type: 'CAR' | 'TRUCK';
    model: string | null;
    color: 'RED' | 'WHITE' | 'BLUE';
    licenseNumber: number;
    owner: string | null;
    capacity: number | null;
};

export const CAR_INIT: Car = {
    type: 'CAR',
    model: null,
    color: 'WHITE',
    licenseNumber: 0,
    owner: null,
    capacity: null
};