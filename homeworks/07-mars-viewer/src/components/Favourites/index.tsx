import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { Photo } from "../Photo";
import s from "./styles.module.css";

export const Favourites = () => {
  const favourites = useAppSelector(
    (state: RootState) => state.favourites.photoIds
  );
  const mars = useAppSelector((state: RootState) => state.mars);

  return (
    <>
      {favourites.length > 0 ? (
        <div className={s.grid}>
          {mars.photos
            .filter((photo) => favourites.includes(photo.id))
            .map((photo) => (
              <Photo key={photo.id} photo={photo} />
            ))}
        </div>
      ) : (
        <p>No favourites photos, add some!</p>
      )}
    </>
  );
};
