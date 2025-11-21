import PropTypes from 'prop-types';
import {Link} from 'react-router';
const MediaRow = ({item, setSelectedItem}) => {
return (
    <tr key={item.media_id}>
        <td>
            <img src={item.thumbnail} alt={item.title} />
        </td>
        <td>{item.title}</td>
        <td>{item.username}</td>
        <td>{item.description}</td>
        <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
        <td>{item.filesize}</td>
        <td>{item.media_type}</td>
        <td>
            <Link to="/single" state={item}>
            Show
            </Link>
        </td>
    </tr>   
    );
};

MediaRow.propTypes = {
    media_id: PropTypes.number.isRequired,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    created_at: PropTypes.string,
    filesize: PropTypes.number,
    media_type: PropTypes.string
};

export default MediaRow;