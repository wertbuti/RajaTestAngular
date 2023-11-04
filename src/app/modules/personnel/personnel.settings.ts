import { AppSettings } from "@app/app.settings";

export class PersonnelSettings {

    public static API_BASE_ENDPOINT= AppSettings.API_BASE_ENDPOINT;
    public static API_ENDPOINT= AppSettings.API_ENDPOINT;

    public static IMAGE_URL = '/images/articles';
    public static fullImageUrl(pictureUri:string):string{return this.API_BASE_ENDPOINT + this.IMAGE_URL +'/'+ pictureUri;}
    public static fullNoImageUrl():string{return this.fullImageUrl('noImage.jpg');}

    public static PERSONNEL_INDEX_URL = '/user/personnel'
    public static PERSONNEL_NEW_URL = '/user/personnel/new'
    public static PERSONNEL_EDIT_URL = '/user/personnel/edit'
    public static PERSONNEL_DETAILS_URL = '/user/personnel/details'
    public static PERSONNEL_DELETE_URL = '/user/personnel/delete'

    public static PERSONNELCERTIFICATE_INDEX_URL = '/user/personnel/personnelCertificate'
    public static PERSONNELCERTIFICATE_NEW_URL = '/user/personnel/personnelCertificate/new'
    public static PERSONNELCERTIFICATE_EDIT_URL = '/user/personnel/personnelCertificate/edit'
    public static PERSONNELCERTIFICATE_DETAILS_URL = '/user/personnel/personnelCertificate/details'
    public static PERSONNELCERTIFICATE_DELETE_URL = '/user/personnel/personnelCertificate/delete'

    public static CERTIFICATE_INDEX_URL = '/user/personnel/certificate'
    public static CERTIFICATE_NEW_URL = '/user/personnel/certificate/new'
    public static CERTIFICATE_EDIT_URL = '/user/personnel/certificate/edit'
    public static CERTIFICATE_DETAILS_URL = '/user/personnel/certificate/details'
    public static CERTIFICATE_DELETE_URL = '/user/personnel/certificate/delete'

    
 }