import { ListGroup, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/tablesReducer';
import { Link } from 'react-router-dom';

const Tables = () => {
  const tables = useSelector(getAllTables);
  
  return (
    <ListGroup variant="flush">
      {tables.map(table => (
        <ListGroup.Item key={table.id} className="py-3 mb-4 d-flex justify-content-between align-items-start">
          <div className='d-flex align-items-center'>
            <h2 className='my-0'>Table {table.id}</h2>
            <span className='vr mx-1'></span>
            <b>Status: </b><span className="ms-1 text-muted">{table.status}</span>
          </div>
          <Button as={Link} to={`/table/${table.id}`} variant="primary">Show more</Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default Tables;