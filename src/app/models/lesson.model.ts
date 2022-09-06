import firebase from "firebase/compat/app";
import Timestamp = firebase.firestore.Timestamp;

export interface LessonModel{
  id: string,
  callOff: string[],
  title : string;
  place: string;
  created_at : Date;
  date: Timestamp;
  end: Timestamp
}
