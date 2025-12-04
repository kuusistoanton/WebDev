import {useState} from 'react';
import useForm from '../hooks/formHooks';
import {useFile, useMedia} from '../hooks/apiHooks';
import {useNavigate} from 'react-router';

const Upload = () => {
  const [file, setFile] = useState(null);
  const {postFile} = useFile();
  const {postMedia} = useMedia();
  const navigate = useNavigate();

  const initValues = {
    title: '',
    description: '',
  };

  const handleFileChange = (evt) => {
    if (evt.target.files) {
      console.log(evt.target.files[0]);
      setFile(evt.target.files[0]);
    }
  };

  const doUpload = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No token found');

      // Upload file to file server
      const fileData = await postFile(file, token);
      console.log('File uploaded:', fileData);

      // Post media metadata to media API
      const mediaData = await postMedia(fileData, inputs, token);
      console.log('Media created:', mediaData);

      // Redirect to home
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(doUpload, initValues);

  return (
    <>
      <div className="max-w-2xl mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Upload Media</h1>
        <form onSubmit={handleSubmit} className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-lg p-6 shadow-md space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title</label>
            <input
              name="title"
              type="text"
              id="title"
              onChange={handleInputChange}
              value={inputs.title}
              className="w-full px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
            <textarea
              name="description"
              rows={5}
              id="description"
              onChange={handleInputChange}
              value={inputs.description}
              className="w-full px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="file" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">File</label>
            <input
              name="file"
              type="file"
              id="file"
              accept="image/*, video/*"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-600 dark:text-gray-400 file:bg-blue-500 file:text-white file:py-2 file:px-4 file:rounded file:border-0 file:cursor-pointer hover:file:bg-blue-600"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : 'https://placehold.co/200?text=Choose+image'
              }
              alt="preview"
              className="w-48 h-48 object-cover rounded-lg border border-gray-200 dark:border-neutral-700"
            />
          </div>
          <button
            type="submit"
            disabled={file && inputs.title.length > 3 ? false : true}
            className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Upload
          </button>
        </form>
      </div>
    </>
  );
};

export default Upload;