const { useSelector, useDispatch } = require('react-redux');
const { changeFilter } = require('store/filterSlice');
const { InputName } = require('./Filter.styled');

function Filter() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <>
      <InputName
        type="text"
        name="filter"
        value={filter}
        onChange={evt => dispatch(changeFilter(evt.target.value))}
        placeholder="Find contact by name"
      ></InputName>
    </>
  );
}

export default Filter;
