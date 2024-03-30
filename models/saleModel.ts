import { LocationModel } from "./locationModel";
import { EntryModel } from "./entryModel";
import { OrganiserDetailsModel } from "./organiserDetailsModel";

export interface SaleModel {
    adminApproved: boolean;
    name: string;
    location: LocationModel;
    address: string;
    region: string;
    daysOpen: string[];
    frequency: string;
    openBankHolidays: boolean | null;
    bankHolidayAdditionalInfo: string;
    fromTo: string;
    environment: string;
    terrain: string;
    entry: EntryModel;
    toilets: boolean | null;
    accessibleToilets: boolean | null;
    refreshments: boolean | null;
    parking: boolean | null;
    accessibleParking: boolean | null;
    parkingInfo: string;
    petFriendly: boolean | null;
    otherInfo: string;
    organiserDetails: OrganiserDetailsModel;
    coverImageUrl: string;
    dateCreated: string;
}