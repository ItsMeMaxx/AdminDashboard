import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from "rxjs";
import Query = firebase.firestore.Query;
import firebase from "firebase/compat";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private data: BehaviorSubject<any> = new BehaviorSubject([])
  public data$ = this.data.asObservable();


  constructor(private angularFirestore: AngularFirestore) {
  }

  getDataFromDatabaseAsStream(database: string, queryOptions?: { field: string, orderBy: 'asc' | 'desc' }): Observable<any> {
    this.data.next([]);
    return this.angularFirestore.collection(database, ref => {
      let query: firebase.firestore.CollectionReference | Query = ref
      if (queryOptions) {
        query = query.orderBy(queryOptions.field, queryOptions.orderBy)
      }
      return query
    })
      .snapshotChanges().pipe(
      map(docs => {
        return docs.map(doc => {
          const data: any = doc.payload.doc.data()
          return {
            ...data,
            id: doc.payload.doc.id
          }
        })
      })
    )
  }

  async getDataFromDatabaseSingleQuery(database: string): Promise<any> {
    let querySnapshotsFromDatabase: any = []

    this.angularFirestore.collection(database).get().forEach((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        querySnapshotsFromDatabase.push(doc.data())
        console.log("2@")
      })
    }).then(() => {
      console.log("1@")
      return querySnapshotsFromDatabase;
    })
  }

  async multiDatabaseQuery(databases: Array<string>) {
    let databaseQueryReturn: { [databaseName: string]: any } = {};

    databases.forEach((databaseName) => {
      databaseQueryReturn[databaseName] = this.getDataFromDatabaseSingleQuery(databaseName);
      console.log("@@")
    })
    return databaseQueryReturn;
  }

  createData(database: string, data: Object) {
    this.angularFirestore.collection(database).doc().set(data)
      .then(() => {
        console.log("Success");
      })
      .catch((error) => {
        console.log(error);
      })
  }

  createDeepData(database: string, data : Object){
    this.angularFirestore.collection(database).doc("H").set(data)
      .then(() => {
        console.log("Success");
      })
      .catch((error) => {
        console.log(error);
      })
  }

  updateData(database: string, data: Object, id: string) {
    this.angularFirestore.collection(database).doc(id).update(data)
      .then(() => console.log("Success"))
      .catch((error) => console.log(error))
  }

  updateDeepData(database: string, secondCollection: string, data: Object, firstId: string|undefined, secondId : string) {
    this.angularFirestore.collection(database).doc(firstId).collection(secondCollection).doc(secondId).update(data)
      .then(() => console.log("Success"))
      .catch(function (error) {
        console.log(error);
      })
  }

  deleteData(database: string, id: string) {
    this.angularFirestore.collection(database).doc(id).delete()
      .then(() => console.log("Success"))
      .catch((error) => console.log(error))
  }


}
