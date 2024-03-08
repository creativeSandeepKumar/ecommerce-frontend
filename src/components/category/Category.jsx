import React, { useEffect, useState } from 'react'
import Select from '../Elements/Select'
import useApiRequest from '@/hooks/useApiRequest';
import { RequestTypeEnum } from '@/constants';
import Createcategorymodel from './Createcategorymodel';
import { reactToast } from '@/utils/helper';
import { useDispatch, useSelector } from 'react-redux';
import Updatecategorymodel from './Updatecategorymodel';

const Category = ({formData, handleChange}) => {
    const dispatch = useDispatch();
    const { apiData, handleApiRequest } = useApiRequest( "/categories" , RequestTypeEnum.GET);
    const [isCategorymodelOpen, setIsCategorymodelOpen] = useState({
        createModel: false,
        updateModel: false
    });

    const { iscategorycreated, message } = useSelector((state) => state.products);

    const handleCreateCategoryModel = () => {
        setIsCategorymodelOpen({
          createModel: !isCategorymodelOpen.createModel
        });
    }

    const handleUpdateCategoryModel = () => {
        setIsCategorymodelOpen({
          updateModel: !isCategorymodelOpen.updateModel
        });
    }

    useEffect(() => {
        handleApiRequest();
    }, [])
    


    useEffect(() => {
        if(iscategorycreated) {
            handleApiRequest();
            dispatch({
                type: "productreducer/IsCategoryCreated",
                payload: false,
            })
            reactToast("success", message);
        }
      }, [iscategorycreated]);


  return (
    <section>
    <div className="flex flex-wrap esm:flex-nowrap w-full py-1 items-end gap-2">
              <aside className="w-full">
                <Select
                  label={"Select Cateory"}
                  defaultText="Select Category"
                  name="category"
                  value={formData.category}
                  handleChange={handleChange}
                  className="w-full px-2"
                  options={apiData?.categories.map((category) => category.name) || ["Watches", "Woofer", "657be09fada690d387d51f7d"]}
                  idoptions={apiData?.categories.map((category) => category._id)}
                  multiple={false}
                />
              </aside>
              <aside className="w-full">
                <button
                  type="button"
                  onClick={handleCreateCategoryModel}
                  className="px-4 w-full bg-blue-500 hover:bg-blue-900 text-white rounded-md h-8"
                >
                  Create Category
                </button>
              </aside>
    </div>
    {
        isCategorymodelOpen.createModel && (
            <Createcategorymodel handleCreateCategoryModel={handleCreateCategoryModel} opendeletemodel={handleUpdateCategoryModel} openupdatemodel={handleUpdateCategoryModel} />
        )
    }
    {
        isCategorymodelOpen.updateModel && (
            <Updatecategorymodel handleCreateCategoryModel={handleCreateCategoryModel} opendeletemodel={handleUpdateCategoryModel} openupdatemodel={handleUpdateCategoryModel} closeCategoryModel={handleUpdateCategoryModel}  />
        )
    }
    </section>
  )
}

export default Category