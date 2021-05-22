import s from "./styles.module.css";
import cn from "classnames";
import { RootState } from "../../app/store";
import { SyntheticEvent } from "react";
import { routesReducer } from "../../app/reducers/routes";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export const Router = () => {
  const menuItems = [
    { name: "Photos", route: "nasa" },
    { name: "Favourites", route: "favourites" },
  ];

  const routes = useAppSelector((state: RootState) => state.routes);

  const dispatch = useAppDispatch();

  const onMenuItem = (event: SyntheticEvent) => {
    const element = event.target as HTMLSpanElement;

    const route = menuItems.find(
      (item) => item.name === element.innerText
    )?.route;
    if (route !== routes.selectedRoute) {
      dispatch(routesReducer.actions.changeRoute(route));
    }
  };

  return (
    <p className={s.router}>
      {menuItems.map((item) => {
        const className =
          item.route === routes.selectedRoute
            ? cn(s.route, s.selectedRoute)
            : s.route;
        return (
          <>
            {item !== menuItems[0] ? " | " : ""}
            <span key={item.name} className={className} onClick={onMenuItem}>
              {item.name}
            </span>
          </>
        );
      })}
    </p>
  );
};
