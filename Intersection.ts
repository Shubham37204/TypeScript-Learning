//eg1
interface BusinessPartner {
    name: string
}
interface ContactDetails {
    email: string;
    phone: string;
}

type BusinessContact = BusinessPartner & ContactDetails

const contact: BusinessContact = {
    name: "tim",
    email: "tim@gmail.com",
    phone:""
}

//eg2
interface Individual {
    name: string;
    birthday: Date;
}
interface Organization {
    companyName: string; workPhone: string;
}

type ContactType = Individual | Organization
type CompContact = Individual & Organization

function addContact(contact:ContactType){
    if ("birthday" in contact){
        console.log(contact.name);
    }else{
        console.log(contact.companyName);
    }
}

