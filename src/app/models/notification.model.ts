import {firestore} from "firebase-admin";
import Timestamp = firestore.Timestamp;

export interface NotificationModel{
  id: string,
  title: string,
  group: string,
  delete_at: Timestamp,
  created_at: Date,
}
