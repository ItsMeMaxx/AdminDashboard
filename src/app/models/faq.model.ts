import {firestore} from "firebase-admin";
import Timestamp = firestore.Timestamp;

export interface FaqModel{
  id: string,
  created_at: Timestamp,
  answer: string,
  question: string,
  group: string,
}
