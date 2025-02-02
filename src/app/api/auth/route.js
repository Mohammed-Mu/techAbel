import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export async function POST(req) {
  try {
    const { email, password, type } = await req.json();

    let userCredential;
    if (type === "signup") {
      userCredential = await createUserWithEmailAndPassword(auth, email, password);
    } else {
      userCredential = await signInWithEmailAndPassword(auth, email, password);
    }

    return Response.json({ user: userCredential.user });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}
