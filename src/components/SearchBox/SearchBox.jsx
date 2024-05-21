import { useId } from "react";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";
import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";

export const SearchBox = () => {
  const state = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const searchBoxId = useId();

  return (
    <div className={css.searching}>
      <label htmlFor={searchBoxId}>
        <input
          placeholder="Find contacts by name"
          className={css.input}
          value={state}
          onChange={(event) => {
            dispatch(changeFilter(event.target.value));
          }}
          type="text"
          id={searchBoxId}
        />
      </label>
    </div>
  );
};
