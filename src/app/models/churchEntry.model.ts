import {firestore} from "firebase-admin";
import Timestamp = firestore.Timestamp;

export interface ChurchEntryModel {
  id: string,
  church: string,
  pastor: string,
  status: string,
  title: string,
  time: Timestamp,
  userId: string,
  serviceId: string
}
