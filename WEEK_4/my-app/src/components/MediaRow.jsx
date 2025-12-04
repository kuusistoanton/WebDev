import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {useUserContext} from '../hooks/contextHooks';

const MediaRow = ({item, setSelectedItem}) => {
    const {user} = useUserContext();
    
    // Check if user is owner or admin
    const isOwner = user && user.user_id === item.user_id;
    const isAdmin = user && user.level_name === 'Admin';
    const canModifyDelete = isOwner || isAdmin;

return (
    <tr key={item.media_id} className="border-b border-gray-200 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors cursor-pointer" onClick={() => setSelectedItem(item)}>
        <td className="px-4 py-3">
            <img src={item.thumbnail} alt={item.title} className="h-12 w-12 object-cover rounded" />
        </td>
        <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">{item.title}</td>
        <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">{item.username}</td>
        <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 max-w-xs truncate">{item.description}</td>
        <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">{new Date(item.created_at).toLocaleString('fi-FI')}</td>
        <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">{item.filesize} B</td>
        <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">{item.media_type}</td>
        <td className="px-4 py-3 text-sm space-x-2 flex" onClick={(e) => e.stopPropagation()}>
            {canModifyDelete && (
                <>
                    <button
                        onClick={() => console.log("modify", item)}
                        className="font-semibold text-green-500 hover:text-green-400 transition-colors"
                    >
                        Modify
                    </button>
                    <button
                        onClick={() => console.log("delete", item)}
                        className="font-semibold text-red-500 hover:text-red-400 transition-colors"
                    >
                        Delete
                    </button>
                </>
            )}
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