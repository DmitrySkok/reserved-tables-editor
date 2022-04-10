import TableForm from '../../features/TableForm/TableForm'
import { useSelector } from 'react-redux';
import { getTableById } from '../../../redux/tablesReducer';
import { useParams } from 'react-router-dom';

const SingleTable = () => {
  const { id } = useParams();
  const tableData = useSelector(state => getTableById(state, id));
  return (
    <>
      <h1 className='mb-4'>Table {tableData.status}</h1>
        <TableForm
          key={tableData.id}
          id={tableData.id}
          status={tableData.status}
          peopleAmount={tableData.peopleAmount}
          maxPeopleAmount={tableData.maxPeopleAmount}
          bill={tableData.bill}
        />
    </>
  )
}

export default SingleTable