export interface Icontacts {
    name: string;
    emails: string[];
    telefones: string[];
  }
  
  
  export interface IContactsCreateResponse {
    id?: string;
    name: string;
    emails: string[];
    telefones: string[];
    user?: any
  }
  
  
  