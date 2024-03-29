import React, { useEffect, useId, useState } from 'react'
import Input from '../Elements/Input';
import Colors from '../Features/Colors/Colors';

const Productsubimages = ({formData, setFormData}) => {
    const variantsId = useId();
    const [previewSubImages, setPreviewSubImages] = useState([
        {
            id: variantsId,
            images: [],
        }
    ]);

    const [subvariantsList, setSubvariantsList] = useState([
        {
           id: variantsId,
          color: '',
          images: [],
        },
      ]);
    
      const handleAddSubvariant = () => {
        setSubvariantsList([...subvariantsList, { id: subvariantsList.length + 1, color: '', images: [] }]);
        setPreviewSubImages([...previewSubImages, { id: previewSubImages.length + 1, images: [] }])
      };
    
      const handleRemoveSubvariant = (index) => {
        setSubvariantsList(subvariantsList.filter((variants) => variants.id !== index));
        setPreviewSubImages(previewSubImages.filter((variants) => variants.id !== index));
      };
    
      const handleSubvariantChange = (event, index) => {
        const { name, value } = event.target;
        setSubvariantsList((prevList) =>
          prevList.map((subvariant, i) => (i === index ? { ...subvariant, [name]: value } : subvariant))
        );
      };
    
      const handleSubImagesChange = (event, index) => {
        const files = event.target.files[0];
      
        const reader = new FileReader();
        reader.onload = () => {
          const subvariant = previewSubImages.find((subv) => subv.id === index);
          subvariant.images = [...subvariant.images, reader.result];
      
          setPreviewSubImages((prevImages) =>
            prevImages.map((prevSubImage) =>
              prevSubImage.id === index
                ? { ...prevSubImage, images: subvariant.images }
                : prevSubImage
            )
          );
        };
        reader.readAsDataURL(files);

        setSubvariantsList((prevList) =>
          prevList.map((subvariant, i) => (subvariant.id === index ? { ...subvariant, images: [...subvariant.images, ...event.target.files] } : subvariant))
        );
      };

      const displaySubvariantImages = (images) =>
      images.length > 0 ? (
          images.map((image, index) => {
           return (
            <img
              key={index}
              src={image}
              alt="sub image preview"
              className="h-32 w-32 border-[2px] border-gray-500 btn-color rounded-md object-fill"
            />
          )})
        ) : (
          <img
            src="https://via.placeholder.com/200x200.png"
            alt="sub image preview"
            className="h-32 w-32 border-[2px] border-gray-500 btn-color rounded-md object-fill mx-auto"
          />
        );

        useEffect(() => {
            setFormData((prevData) => ({
                ...prevData, 
                subvariants: subvariantsList,
            }))
          
        }, [subvariantsList])
        

  return (
    <div>
        <h4 className='text-lg font-semibold'>Create Sub Image Variants</h4>
               {subvariantsList.map((subvariant, index) => (
        <section key={subvariant.id} className='border-gray-600 border-[1px] rounded-md p-2 my-2'>
            {subvariantsList.find((sv) => sv.id === subvariant.id) && (
                <div className='space-y-2'>
          <div className='w-full'>
              <Colors formData={subvariant} handleChange={(event) => handleSubvariantChange(event, index)} />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {displaySubvariantImages(...previewSubImages.filter((subimages) => subimages.id === subvariant.id).map((subImages) => subImages.images))}
          </div>
          <div className="flex justify-center py-1">
            <Input
              label={"Select Sub Image"}
              type="file"
              handleChange={(event) => handleSubImagesChange(event, subvariant.id)}
              name={"subImages"}
              className="border-none px-0 py-1"
              multiple
            />
          </div>
          {index < subvariantsList.length - 1 && (
            <button
              type='button'
              className='text-sm text-white font-semibold bg-red-400 hover:bg-red-800 px-3 p-1 rounded-md mt-2'
              onClick={() => handleRemoveSubvariant(subvariant.id)}
            >
              Remove Subvariant
            </button>
          )}
          </div>
            )}
        </section>
      ))}
       <button type="button" className="bg-blue-400 text-white hover:bg-blue-600 px-4 py-1 my-2 rounded-md"
       onClick={() =>handleAddSubvariant()}>
        Add More Subvariants
      </button>
    </div>
  )
}

export default Productsubimages