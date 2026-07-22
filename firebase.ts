import { initializeApp, getApp, getApps } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  doc, 
  setDoc, 
  serverTimestamp 
} from "firebase/firestore";
// @ts-ignore
import firebaseConfig from "../firebase-applet-config.json";

// Safe loading of config
const isConfigured = !!(firebaseConfig && firebaseConfig.apiKey && firebaseConfig.apiKey !== "");

let app;
let db: any = null;

if (isConfigured) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    db = getFirestore(app, firebaseConfig.firestoreDatabaseId || "(default)");
    console.log("Firebase initialized successfully with configuration");
  } catch (err) {
    console.error("Firebase initialization failed:", err);
  }
} else {
  console.warn("Firebase is running in sandbox mock mode - please accept the Terms to synchronize with Live Firestore.");
}

export { db, isConfigured };

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
  }
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: null,
      email: null,
      emailVerified: null,
      isAnonymous: null,
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

/**
 * Saves contact inquiry to Firestore or falls back if config is missing
 */
export async function saveInquiry(data: { name: string; email: string; category: string; subject: string; message: string }) {
  const payload = {
    ...data,
    createdAt: db ? serverTimestamp() : new Date()
  };
  const path = "inquiries";
  
  if (!db) {
    console.log("Mock saving inquiry to console:", payload);
    return { success: true, mock: true, id: "MOCK-INQ-" + Math.floor(100000 + Math.random() * 900000) };
  }
  
  try {
    const docRef = await addDoc(collection(db, path), payload);
    return { success: true, id: docRef.id };
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
    throw error;
  }
}

/**
 * Saves attendee registration and ticketing payment transaction details
 */
export async function saveRegistration(data: {
  name: string;
  email: string;
  category: string;
  passType: string;
  paymentStatus: string;
  paymentMethod: string;
  amount: number;
  transactionId: string;
  cardholderName: string;
}) {
  const payload = {
    ...data,
    createdAt: db ? serverTimestamp() : new Date()
  };
  const path = "registrations";

  if (!db) {
    console.log("Mock saving registration billing statement:", payload);
    return { success: true, mock: true, id: data.transactionId };
  }

  try {
    const docRef = doc(db, path, data.transactionId);
    await setDoc(docRef, payload);
    return { success: true, id: data.transactionId };
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, `${path}/${data.transactionId}`);
    throw error;
  }
}

/**
 * Saves Emiratization PhD Fellowship Application and Abstract
 */
export async function saveFellowship(data: {
  nameEn: string;
  nameAr: string;
  email: string;
  phone: string;
  school: string;
  abstract: string;
  degree: string;
  boardType: string;
  yearsExp: number;
  totalMonthly: number;
  refId: string;
}) {
  const payload = {
    ...data,
    createdAt: db ? serverTimestamp() : new Date()
  };
  const path = "fellowships";

  if (!db) {
    console.log("Mock saving fellowship credentials:", payload);
    return { success: true, mock: true, id: data.refId };
  }

  try {
    const docRef = doc(db, path, data.refId);
    await setDoc(docRef, payload);
    return { success: true, id: data.refId };
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, `${path}/${data.refId}`);
    throw error;
  }
}

/**
 * Saves WE-Shark Tank pitch and EdTech details
 */
export async function savePitch(data: {
  leadName: string;
  teamName: string;
  email: string;
  pitchTitle: string;
  elevatorPitch: string;
  pledgeCapital: number;
  techTrack: string;
  deploymentScale: string;
  estimationPartner: string;
  requiredMilestones: string;
  mentors: string;
  refId: string;
}) {
  const payload = {
    ...data,
    createdAt: db ? serverTimestamp() : new Date()
  };
  const path = "pitches";

  if (!db) {
    console.log("Mock saving venture pitch metadata:", payload);
    return { success: true, mock: true, id: data.refId };
  }

  try {
    const docRef = doc(db, path, data.refId);
    await setDoc(docRef, payload);
    return { success: true, id: data.refId };
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, `${path}/${data.refId}`);
    throw error;
  }
}

/**
 * Saves Educator Registration for Accredited Teachers/Leaders
 */
export async function saveEducatorRegistration(data: {
  name: string;
  email: string;
  schoolName: string;
  educatorRole: string;
  subjectTaught: string;
  yearsExperience: number;
  emirate: string;
  registrationCode: string;
}) {
  const payload = {
    ...data,
    createdAt: db ? serverTimestamp() : new Date()
  };
  const path = "educators";

  if (!db) {
    console.log("Mock saving educator registration:", payload);
    return { success: true, mock: true, id: data.registrationCode };
  }

  try {
    const docRef = doc(db, path, data.registrationCode);
    await setDoc(docRef, payload);
    return { success: true, id: data.registrationCode };
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, `${path}/${data.registrationCode}`);
    throw error;
  }
}
