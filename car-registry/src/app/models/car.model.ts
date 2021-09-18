export interface Car {
    type: 'CAR' | 'TRUCK';
    model: string;
    color: 'RED' | 'WHITE' | 'BLUE';
    licenseNumber: string;
    owner: string | null;
    capacity: number | null;
}