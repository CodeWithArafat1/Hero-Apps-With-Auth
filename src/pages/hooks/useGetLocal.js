import { toast } from "react-toastify";
import {
  IS_EXISTING,
  IS_SELECTED,
  SET_LOCAL,
  SORTED_APP,
} from "../../reducer/reducer";
import { useAppContext } from "../../contexts/context";
import { useCallback } from "react";

export const useGetLocal = () => {
  const { dispatch, savedLocal } = useAppContext();
  const handelUnstall = useCallback(
    (id) => {
      const getLocal = localStorage.getItem("installedApps");

      if (getLocal) {
        const savedApp = JSON.parse(getLocal);
        const newApps = savedApp.filter((app) => app.id !== id);
        localStorage.setItem("installedApps", JSON.stringify(newApps));
        dispatch({ type: SET_LOCAL, payload: newApps });
        toast.success("Unistall Successfully");
      }
    },
    [dispatch]
  );

  const handelSort = (e) => {
    const value = e.target.value;
    dispatch({ type: IS_SELECTED, payload: value });
    if (value === "def") {
      dispatch({ type: SORTED_APP, payload: savedLocal });
      return;
    }
    if (value === "download_asc") {
      const sortByASC = [...savedLocal].sort(
        (a, b) => a.downloads - b.downloads
      );
      dispatch({ type: SORTED_APP, payload: sortByASC });
    }
    if (value === "download_desc") {
      const sortByASC = [...savedLocal].sort(
        (a, b) => b.downloads - a.downloads
      );
      dispatch({ type: SORTED_APP, payload: sortByASC });
    }
  };

  const handelInstall = (app) => {
    const existing = JSON.parse(localStorage.getItem("installedApps")) || [];
    const isAlreadyInstalled = existing.some((item) => item.id === app.id);

    if (!isAlreadyInstalled) {
      const updated = [...existing, app];
      localStorage.setItem("installedApps", JSON.stringify(updated));
      dispatch({ type: IS_EXISTING, payload: true });
      toast.success(`${app.title} installed successfully!`);
    } else {
      toast.warning("Alrady Installed");
    }
  };

  return { handelUnstall, handelSort, handelInstall };
};
