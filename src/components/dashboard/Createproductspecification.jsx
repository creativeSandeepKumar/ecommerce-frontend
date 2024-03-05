"use client"
import React, { useState, useId } from 'react';

const Createproductspecification = ({ formData, setFormData }) => {
    const itemid = useId();
  const [sections, setSections] = useState([
    {
      id: itemid, // Add unique IDs for easier tracking
      name: '',
      description: '',
    },
  ]);

  const handleAddSection = () => {
    setSections([...sections, { id: sections.length + 1, name: '', description: '' }]);
  };

  const handleRemoveSection = (id) => {
    setSections(sections.filter((section) => section.id !== id));
    setFormData((prevData) => ({
        ...prevData,
        specifications: sections.filter((section) => section.id !== id),
      }));
  };

  const handleChange = (event, id) => {
    const { name, value } = event.target;
    setSections(
      sections.map((section) => (section.id === id ? { ...section, [name]: value } : section))
    );
    setFormData((prevData) => ({
        ...prevData,
        specifications: sections.map((section) => (section.id === id ? { ...section, [name]: value } : section)),
      }));
  };


  return (
    <div>
      <h5>Product Specifications</h5>
      {sections.map((section) => (
        <section key={section.id} className='flex items-center gap-1'>
          <aside className='w-full'>
            <fieldset className='border-gray-500 border-[1px] rounded-md px-3'>
              <legend className='px-[3px]'>Name</legend>
              <input
                type="text"
                name="name"
                className='w-full focus:outline-none pb-1'
                value={section.name}
                onChange={(event) => handleChange(event, section.id)}
              />
            </fieldset>
          </aside>
          <aside className='w-full'>
            <fieldset className='border-gray-500 border-[1px] rounded-md px-3'>
              <legend className='px-[3px]'>description</legend>
              <input
                type="text"
                name="description"
                className='w-full focus:outline-none pb-1'
                value={section.description}
                onChange={(event) => handleChange(event, section.id)}
              />
            </fieldset>
          </aside>
          {sections.length > 1 && sections[sections.length - 1].id !== section.id ? ( // Show - button only for sections other than the last one
            <aside className='flex items-center'>
              <button type='button'
                className='text-2xl font-semibold bg-gray-300 px-3 pb-1 py-0 rounded-md mt-2'
                onClick={() => handleRemoveSection(section.id)}
              >
                -
              </button>
            </aside>
          ) : (
            <aside className='flex items-center'>
              <button type='button'
                className='text-2xl font-semibold bg-gray-300 px-3 pb-1 py-0 rounded-md mt-2'
                onClick={handleAddSection}
              >
                +
              </button>
            </aside>
          )}
        </section>
      ))}
    </div>
  );
};

export default Createproductspecification;
