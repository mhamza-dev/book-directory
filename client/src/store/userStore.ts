import { create } from "zustand";
import { User } from "../types/user";

interface UserStore {
  users: User[];
  updateUsersList: (users: User[]) => void;
}

const userStore = create<UserStore>((set) => ({
  users: [],
  updateUsersList: (users: User[]) => set(() => ({ users })),
}));


export default userStore;
