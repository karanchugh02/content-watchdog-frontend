import { UserType } from '@/types/user';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type UserState = {
  user: UserType;
  setUser: (user: UserType) => void;
  //   getUser: () => UserType;
  removeUser: () => void;
};

export const userAuthStore = create<UserState>()(
  persist(
    (set, get) => ({
      user: null,
      setUser: (user: UserType) => {
        set({ user });
      },
      removeUser: () => {
        localStorage.removeItem('content_watch_dog_user');
      },
    }),
    {
      name: 'content_watch_dog_user', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
