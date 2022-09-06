import firebase from "firebase/compat";
import Timestamp = firebase.firestore.Timestamp;

export interface FirebaseAppointment{
  id: string,
  bgColor: string;
  title : string;
  municipality : string;
  church: string;
  created_at : Date;
  time: Date | Timestamp;
}
