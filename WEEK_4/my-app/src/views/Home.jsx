import MediaRow from '../components/MediaRow';
import SingleView from '../components/SingleView';
import {useState} from 'react';
import {useMedia} from '../hooks/apiHooks';

const Home = () => {
     const [selectedItem, setSelectedItem] = useState(
     null,
 );
    
     const {mediaArray} = useMedia();
    
     return (
         <>
             <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />
             <div className="py-8">
                 <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">My Media</h1>
                 <div className="overflow-x-auto">
                     <table className="w-full border-collapse bg-white dark:bg-neutral-900 rounded-lg overflow-hidden shadow-md">
                         <thead>
                             <tr className="bg-gray-100 dark:bg-neutral-800 border-b border-gray-200 dark:border-neutral-700">
                                 <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Thumbnail</th>
                                 <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Title</th>
                                 <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">User</th>
                                 <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Description</th>
                                 <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Created</th>
                                 <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Size</th>
                                 <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Type</th>
                                 <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">View</th>
                             </tr>
                         </thead>
                         <tbody>
                             {mediaArray.map((mediaItem) => (
                                 <MediaRow
                                     key={mediaItem.media_id}
                                     item={mediaItem}
                                     setSelectedItem={setSelectedItem}
                                 />
                             ))}
                         </tbody>
                     </table>
                 </div>
             </div>
         </>
     );
 };
export default Home;