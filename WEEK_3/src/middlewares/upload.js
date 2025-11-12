import sharp from 'sharp';
   
 const createThumbnail = async (req, res, next) => {
   if (!req.file) {
     next();
     return;
   }
   console.log(req.file.path);
   
   try {
    const thumbnailPathName = req.file.path + '_thumb.png';

    console.log('Original file path:', req.file.path);
    console.log('Creating thumbnail at:', thumbnailPathName);
    
    await sharp(req.file.path)
      .resize(160, 160, { fit: 'cover' })
      .png()
      .toFile(thumbnailPathName);
    console.log('Thumbnail created:', thumbnailPathName);
  } catch (error) {
    console.error('Error creating thumbnail:', error);
    next(error);
    return;
  }

   next();
 };
    
 export {createThumbnail};