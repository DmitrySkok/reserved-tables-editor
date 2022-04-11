import TableForm from '../../features/TableForm/TableForm'
import { useSelector } from 'react-redux';
import { getTableById } from '../../../redux/tablesReducer';
import { useParams } from 'react-router-dom';

const SingleTable = () => {
  const { id } = useParams();
  const tableData = useSelector(state => getTableById(state, parseInt(id)));
  return (
    <>
      <h1 className='mb-4'>Table {tableData.id}</h1>
        <TableForm {...tableData} />
    </>
  )
}

export default SingleTable