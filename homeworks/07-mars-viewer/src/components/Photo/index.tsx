import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { favouritesReducer } from "../../app/reducers/favourites";
import { RootState } from "../../app/store";
import s from "./styles.module.css";

export const Photo = ({ ...props }) => {
  //? photo:IPhoto instead {...props} causes an error TS2322 in MarsViewer.tsx 42:49

  const dispatch = useAppDispatch();

  const favourites = useAppSelector(
    (state: RootState) => state.favourites.photoIds
  );

  const isFavourite = favourites.includes(props.photo.id);

  const opacity = isFavourite ? 1 : 0.5;

  const onFavourite = () => {
    isFavourite
      ? dispatch(favouritesReducer.actions.removeFromFavourites(props.photo.id))
      : dispatch(favouritesReducer.actions.addToFavourites(props.photo.id));
  };

  return (
    <div className={s.photoContainer}>
      <svg
        width="98"
        height="89"
        viewBox="0 0 98 89"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        opacity={opacity}
        className={s.heart}
        onClick={onFavourite}
      >
        <path
          d="M89.834 48.974L48.81 8.95 7.786 48.974 48.81 89l41.023-40.026z"
          fill="#E30A17"
        ></path>
        <path
          d="M59.467 29.381c0 16.022-13.312 29.01-29.733 29.01C13.311 58.391 0 45.403 0 29.381 0 13.36 13.312.371 29.733.371c16.422 0 29.734 12.989 29.734 29.01z"
          fill="#E30A17"
        ></path>
        <path
          d="M98 29.01c0 16.022-13.312 29.01-29.734 29.01-16.42 0-29.733-12.988-29.733-29.01C38.533 12.988 51.845 0 68.266 0 84.688 0 98 12.988 98 29.01z"
          fill="#E30A17"
        ></path>
      </svg>
      <img
        className={s.img}
        src={props.photo.imgSrc}
        alt={props.photo.cameraFullName}
      ></img>
      <span className={s.photoDescription}>
        Rover: {props.photo.roverName}, Camera: {props.photo.cameraFullName}
      </span>
    </div>
  );
};
