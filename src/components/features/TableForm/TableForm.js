import { useDispatch } from 'react-redux';
import { editTableRequest } from '../../../redux/tablesReducer';

const TableCard = () => {
  const dispatch = useDispatch();
  const handeSubmit = e => {
    e.preventDefault();
    dispatch(editTableRequest());
  }
  return (
    <h1>TableCard</h1>
  )
}

export default TableCard