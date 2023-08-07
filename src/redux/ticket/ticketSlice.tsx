import { Action, ThunkAction, createSlice } from "@reduxjs/toolkit";
import { firestore } from "../../firebase/firebaseConfig";
import { RootState } from "../store";
//firebase

export const ticketSlice = createSlice({
  name: "ticket",
  initialState: { data: [] },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload.map((ticket: any) => ({
        ...ticket,
        service: ticket.service, // Store the ID of the role instead of the DocumentReference
      }));
    },
  },
});

export const { setData } = ticketSlice.actions;

interface TicketData {
  typeTicker: string;
  money: string;
  quantity: string;
  date: any;
  fullname: string;
  phoneNumber: string;
  email: string;
}

export const getTicket =
  (): ThunkAction<void, RootState, null, Action<string>> =>
  async (dispatch) => {
    try {
      const ticketRef = firestore.collection("tickets");

      const ticketSnapshot = await ticketRef.get();

      const ticketData = ticketSnapshot.docs.map((doc) => {
        const ticketData = doc.data() as TicketData;
        return ticketData;
      });

      dispatch(setData(ticketData));
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu:", error);
    }
  };

export const createTicket =
  (ticket: TicketData): ThunkAction<void, RootState, null, any> =>
  async (dispatch) => {
    // Chuyển đổi đối tượng Date thành timestamp
    // Kiểm tra nếu ticket.date là một đối tượng Date hợp lệ
    try {
      const docRef = await firestore.collection("tickets").add({
        typeTicker: ticket.typeTicker,
        money: ticket.money,
        quantity: ticket.quantity,
        date: ticket.date,
        fullname: ticket.fullname,
        phoneNumber: ticket.phoneNumber,
        email: ticket.email,
      });

      // Lấy id của ticket đã thêm
      const ticketId = docRef.id;

      // Chuyển hướng đến trang /paystore với id của ticket
      window.location.href = `/paystore/${ticketId}`;
      dispatch(getTicket());
    } catch (error) {
      console.error(error);
    }
  };

export const updateTicket =
  (
    id: string,
    ticket: any
  ): ThunkAction<void, RootState, null, Action<string>> =>
  async (dispatch) => {
    try {
      await firestore
        .collection("tickets")
        .doc(id)
        .update({
          ...ticket,
        });
      dispatch(getTicket());

      // Thực hiện chuyển hướng sau khi cập nhật thành công
      window.location.href = `/paystore/complete/${id}`;
    } catch (error) {
      console.log(error);
    }
  };
