import { useEffect, Dispatch, SetStateAction } from "react";
import { Observable } from "rxjs";

export const useObservable = (
  observable: Observable<any>,
  setter: Dispatch<SetStateAction<any>>
) => {
  useEffect(() => {
    let subscribtion = observable.subscribe((result: any) => setter(result));
    return () => subscribtion.unsubscribe();
  }, [observable, setter]);
};
