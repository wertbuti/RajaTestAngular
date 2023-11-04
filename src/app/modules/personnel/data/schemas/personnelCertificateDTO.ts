import { CertificateDTO } from "./certificateDTO";
import { PersonnelDTO } from "./personnelDTO";

export interface PersonnelCertificateDTO{
    Id:number;    
    PersonnelId:number;    
    CertificateId:number;    
    YearCatch:number;    
    Gpa:number;
    Personnel:PersonnelDTO;
    Certificate:CertificateDTO;
    }
export interface PersonnelCertificateInsertDTO{
    Id:number;    
    PersonnelId:number;    
    CertificateId:number;    
    YearCatch:number;    
    Gpa:number;
    }