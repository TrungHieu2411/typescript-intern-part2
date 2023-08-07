import { Action, ThunkAction, createSlice } from "@reduxjs/toolkit";
import { firestore } from "../../firebase/firebaseConfig";
import { RootState } from "../store";
//firebase

export const eventSlice = createSlice({
  name: "event",
  initialState: { data: [] },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload.map((event: any) => ({
        ...event,
        service: event.service, // Store the ID of the role instead of the DocumentReference
      }));
    },
  },
});

export const { setData } = eventSlice.actions;

interface EventData {
  titleEvent: string;
  nameEvent: string;
  date: any;
  dateLine: any;
  money: string;
  imgOne: string;
  imgTwo: string;
}

export const getEvent =
  (): ThunkAction<void, RootState, null, Action<string>> =>
  async (dispatch) => {
    try {
      const eventRef = firestore.collection("events");

      const eventSnapshot = await eventRef.get();
      
      const eventData = eventSnapshot.docs.map((doc) => {
        const eventData = doc.data() as EventData;
        return {
          id: doc.id, // Store the document ID along with the event data
          ...eventData,
        };
      });

      dispatch(setData(eventData));
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu:", error);
    }
  };

export const createEvent =
  (event: EventData): ThunkAction<void, RootState, null, any> =>
  async (dispatch) => {
    // Chuyển đổi đối tượng Date thành timestamp
    // Kiểm tra nếu ticket.date là một đối tượng Date hợp lệ
    try {
      const docRef = await firestore.collection("events").add({
        titleEvent: event.titleEvent,
        nameEvent: event.nameEvent,
        date: event.date,
        dateLine: event.dateLine,
        money: event.money,
        imgOne: event.imgOne,
        imgTwo: event.imgTwo,
      });

      // Lấy id của ticket đã thêm
      const ticketId = docRef.id;

      // Chuyển hướng đến trang /paystore với id của ticket
      window.location.href = `/event/detail/${ticketId}`;
      dispatch(getEvent());
    } catch (error) {
      console.error(error);
    }
  };

export const updateEvent =
  (
    id: string,
    ticket: any
  ): ThunkAction<void, RootState, null, Action<string>> =>
  async (dispatch) => {
    try {
      await firestore
        .collection("events")
        .doc(id)
        .update({
          ...ticket,
        });
      dispatch(getEvent());
    } catch (error) {
      console.log(error);
    }
  };
