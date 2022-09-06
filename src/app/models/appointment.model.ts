import firebase from "firebase/compat/app";
import Timestamp = firebase.firestore.Timestamp;

export interface AppointmentModel {
  id: string,
  bgColor: string;
  title : string;
  municipality : string;
  place: string;
  created_at : Date;
  time: Timestamp;
}
