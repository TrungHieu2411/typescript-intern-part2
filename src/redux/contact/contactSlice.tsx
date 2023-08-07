import { Action, ThunkAction, createSlice } from "@reduxjs/toolkit";
import { firestore } from "../../firebase/firebaseConfig";
import { RootState } from "../store";
//firebase

export const contactSlice = createSlice({
  name: "contact",
  initialState: { data: [] },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload.map((contact: any) => ({
        ...contact,
        service: contact.service, // Store the ID of the role instead of the DocumentReference
      }));
    },
  },
});

export const { setData } = contactSlice.actions;

interface ContactData {
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
    message: string;
}

export const getContact =
  (): ThunkAction<void, RootState, null, Action<string>> =>
  async (dispatch) => {
    try {
      const contactRef = firestore.collection("contacts");

      const contactSnapshot = await contactRef.get();

      const contactData = contactSnapshot.docs.map((doc) => {
        const contactDataDoc = doc.data() as ContactData;
        return contactDataDoc;
      });

      dispatch(setData(contactData));
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu:", error);
    }
  };

export const createContact =
  (contact: ContactData): ThunkAction<void, RootState, null, any> =>
  async (dispatch) => {
    // Chuyển đổi đối tượng Date thành timestamp
    // Kiểm tra nếu ticket.date là một đối tượng Date hợp lệ
    try {
      await firestore.collection("contacts").add({
        name: contact.name,
        email: contact.email,
        phoneNumber: contact.phoneNumber,
        address: contact.address,
        message: contact.message,
      });
      dispatch(getContact());
       window.location.href = `/contact`;
    } catch (error) {
      console.error(error);
    }
  };
