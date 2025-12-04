import Likes from './Likes';
import { useEffect } from 'react';

const SingleView = (props) => {
    const {item, setSelectedItem} = props;
    let type = "";
    
    useEffect(() => {
        if (item) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [item]);
    
    return (
        <>
            {item && (
                <div className="fixed inset-0 bg-black flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-xl w-full max-w-lg border border-gray-200 dark:border-neutral-700">
                        <div className="p-4 space-y-3 overflow-y-auto max-h-[85vh]">
                            <div className="flex justify-between items-start">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{item.title}</h2>
                                <button onClick={() => setSelectedItem(null)} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-2xl font-semibold leading-none">×</button>
                            </div>
                            
                            <div className="w-full h-48 bg-gray-100 dark:bg-neutral-800 rounded-lg overflow-hidden">
                                {(item.media_type) === "image/jpeg" || (item.media_type) === "image/png" ? (
                                    <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
                                ) : (
                                    <video src={item.thumbnail} controls className="w-full h-full object-cover" />
                                )}
                            </div>
                            
                            <div className="border-t border-gray-200 dark:border-neutral-700 pt-4 space-y-3 bg-white dark:bg-neutral-900 -mx-4 px-4 pb-3">
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Description</p>
                                    <p className="text-gray-900 dark:text-white">{item.description}</p>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <div>
                                        <p className="text-gray-600 dark:text-gray-400">By</p>
                                        <p className="text-gray-900 dark:text-white font-semibold">{item.username}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 dark:text-gray-400">Type</p>
                                        <p className="text-gray-900 dark:text-white">{item.media_type}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <Likes mediaId={item.media_id} />
                            
                            <button onClick={() => setSelectedItem(null)} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">Close</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
};

export default SingleView;