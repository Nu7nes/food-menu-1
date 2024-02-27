import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    DocumentData,
} from "firebase/firestore";

interface FirebaseConfigProps {
    apiKey: string;
    authDomain: string;
    databaseURL: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
}

export default class Api {
    constructor(
        private firebaseConfig: FirebaseConfigProps = {
            apiKey: "AIzaSyADxlmXI1Q0wOg-DyC1-CY_Kjpig5vAV1c",
            authDomain: "fooddeliver-test.firebaseapp.com",
            databaseURL: "https://fooddeliver-test-default-rtdb.firebaseio.com",
            projectId: "fooddeliver-test",
            storageBucket: "fooddeliver-test.appspot.com",
            messagingSenderId: "666941061046",
            appId: "1:666941061046:web:8cb48c78a6e09e2b553317",
        }
    ) {}

    private async loadData(collectionName: string) {
        const data: DocumentData = [];
        const app = initializeApp(this.firebaseConfig);
        const db = getFirestore(app);
        const querySnapshotDataMenu = await getDocs(
            collection(db, collectionName)
        );
        querySnapshotDataMenu.forEach((doc) => {
            data.push(doc.data());
        });
        return data;
    }

    public async getData() {
        const data = {
            menu: await this.loadData("dataMenu"),
            adds: await this.loadData("adds"),
        };
        return data;
    }
}
