"use client";
import { AddIcon, RemoveIcon } from "@/utils/reactIcons";
import React, { useState, useId } from "react";

const Createproductspecification = ({ formData, setFormData }) => {
  const id = useId();
  const [sections, setSections] = useState([
    {
      idheading: id,
      heading: "",
      specificationitems: [
        {
          id: id,
          description: "",
        },
      ],
    },
  ]);

  const handleAddSection = (ids) => {
    const lastid = sections.map((section) => section.idheading)[
      sections.length - 1
    ];

    setSections([
      ...sections,
      {
        idheading: lastid + 1,
        heading: "",
        specificationitems: [{ id: id + 1, description: "" }],
      },
    ]);
  };

  const handleRemoveSection = (id) => {
    if (sections.length === 1) return; // Don't remove if there's only one section
    setSections(sections.filter((section) => section.idheading !== id));
    setFormData((prevData) => ({
      ...prevData,
      specifications: sections.filter((section) => section.idheading !== id),
    }));
  };

  const handleAddSpecificationitems = (sectionId, specificationsid) => {
    const updatedSections = sections.map((section) => {
      if (section.idheading === sectionId) {
        return {
          ...section,
          specificationitems: [
            ...section.specificationitems,
            {
              id: specificationsid[specificationsid.length - 1] + 1,
              description: "",
            },
          ],
        };
      }
      return section;
    });
    setSections(updatedSections);
  };

  const handleRemoveSpecificationitems = (sectionId, itemId) => {
    const updatedSections = sections.map((section) => {
      if (section.idheading === sectionId) {
        return {
          ...section,
          specificationitems: section.specificationitems.filter(
            (item) => item.id !== itemId
          ),
        };
      }
      return section;
    });
    setSections(updatedSections);
    setFormData((prevData) => ({
      ...prevData,
      specifications: updatedSections,
    }));
  };

  const handleSectionHeadingChange = (event, id) => {
    const { name, value } = event.target;
    setSections(
      sections.map((section) =>
        section.idheading === id ? { ...section, [name]: value } : section
      )
    );
    setFormData((prevData) => ({
      ...prevData,
      specifications: sections.map((section) =>
        section.idheading === id ? { ...section, [name]: value } : section
      ),
    }));
  };

  const handleSpecificationChange = (event, sectionId, itemId) => {
    const { name, value } = event.target;
    const updatedSections = sections.map((section) => {
      if (section.idheading === sectionId) {
        return {
          ...section,
          specificationitems: section.specificationitems.map((item) =>
            item.id === itemId ? { ...item, [name]: value } : item
          ),
        };
      }
      return section;
    });
    setSections(updatedSections);
    setFormData((prevData) => ({
      ...prevData,
      specifications: updatedSections,
    }));
  };

  return (
    <div>
      <h5>Product Specifications</h5>
      {sections.map((section, index) => (
        <fieldset
          key={section.idheading}
          className="border-blue-700 border-[1px] rounded-md px-3 py-1"
        >
          <legend className="px-[3px] text-blue-700">
            {" "}
            Specification {index + 1}
          </legend>
          <div>
            <h2 className="text-purple-600">Specification Heading</h2>
            <section className="flex items-center gap-1 border-b-[1.5px] border-orange-700 pb-2">
              <aside className="w-full">
                <fieldset className="border-gray-500 border-[1px] rounded-md px-3">
                  <legend className="px-[3px]">Heading</legend>
                  <input
                    type="text"
                    name="heading"
                    className="w-full focus:outline-none pb-1"
                    value={section.heading}
                    onChange={(event) =>
                      handleSectionHeadingChange(event, section.idheading)
                    }
                    placeholder="Heading Name"
                  />
                </fieldset>
              </aside>
            </section>
            <h2 className="pt-2 text-purple-600">Specification Details</h2>
            {section.specificationitems.map((item) => (
              <section key={item.id} className="flex items-center gap-1">
                <aside className="w-full">
                  <fieldset className="border-gray-500 border-[1px] rounded-md px-3">
                    <legend className="px-[3px]">Description</legend>
                    <input
                      type="text"
                      name="description"
                      className="w-full focus:outline-none pb-1"
                      value={item.description}
                      onChange={(event) =>
                        handleSpecificationChange(
                          event,
                          section.idheading,
                          item.id
                        )
                      }
                      placeholder="Description"
                    />
                  </fieldset>
                </aside>
                {section.specificationitems.length > 1 &&
                section.specificationitems[
                  section.specificationitems.length - 1
                ].id !== item.id ? ( // Show - button only for sections other than the last one
                  <aside className="flex items-center">
                    <button
                      type="button"
                      className="text-xl font-semibold text-white hover:bg-red-700 bg-red-500 px-3 py-1 rounded-md mt-2"
                      onClick={() =>
                        handleRemoveSpecificationitems(
                          section.idheading,
                          item.id
                        )
                      }
                    >
                      <RemoveIcon />
                    </button>
                  </aside>
                ) : (
                  <aside className="flex items-center">
                    <button
                      type="button"
                      className="text-xl font-semibold bg-blue-500 hover:bg-blue-700 px-3 py-1 rounded-md mt-2 text-white "
                      onClick={() =>
                        handleAddSpecificationitems(
                          section.idheading,
                          section.specificationitems.map(
                            (lastitems) => lastitems.id
                          )
                        )
                      }
                    >
                      <AddIcon />
                    </button>
                  </aside>
                )}
              </section>
            ))}
            {sections.length > 1 &&
            sections[sections.length - 1].idheading !== section.idheading ? ( // Show - button only for sections other than the last one
              <aside className="flex items-center">
                <button
                  type="button"
                  className="font-semibold text-white bg-red-500 hover:bg-red-700 flex items-center gap-1 px-3 py-1 rounded-md mt-2"
                  onClick={() => handleRemoveSection(section.idheading)}
                >
                  <RemoveIcon className="text-xl" /> Remove
                </button>
              </aside>
            ) : (
              <aside className="flex items-center">
                <button
                  type="button"
                  className="text-white flex items-center font-semibold bg-blue-500 hover:bg-blue-700 px-3 py-1 gap-1 rounded-md mt-2"
                  onClick={handleAddSection}
                >
                  <AddIcon /> Add
                </button>
              </aside>
            )}
          </div>
        </fieldset>
      ))}
    </div>
  );
};

export default Createproductspecification;
