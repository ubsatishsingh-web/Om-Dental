export interface DentalService {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string; // Will map to Lucide icons
  tag: 'Core' | 'Cosmetic' | 'Surgical' | 'Preventive' | 'Orthodontic';
}

export interface OperatingHour {
  dayGroup: string;
  timeRange: string;
  isSpecial?: boolean;
}

export interface ClinicContact {
  phone: string;
  whatsappLink: string;
  facebookLink: string;
  mapLink: string;
  address: string;
}

export interface AppointmentFormData {
  fullName: string;
  phoneNumber: string;
  serviceRequested: string;
  appointmentDate: string;
  additionalNotes: string;
}
