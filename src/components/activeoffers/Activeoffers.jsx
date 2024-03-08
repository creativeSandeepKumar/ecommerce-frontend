import React, { useEffect, useState } from 'react'
import Select from '../Elements/Select'
import useApiRequest from '@/hooks/useApiRequest';
import { RequestTypeEnum } from '@/constants';
import { useDispatch, useSelector } from 'react-redux';
import { reactToast } from '@/utils/helper';
import Createactiveoffermodel from './Createactiveoffermodel';
import Updateactiveoffermodel from './Updateactiveoffermodel';

const Activeoffers = ({formData, handleChange}) => {
    const dispatch = useDispatch();
    const { apiData, handleApiRequest } = useApiRequest( "/activeoffer" , RequestTypeEnum.GET);
    const [isActiveoffermodelOpen, setIsActiveoffermodelOpen] = useState({
        createModel: false,
        updateModel: false
    });

    const { isactiveoffercreated, message } = useSelector((state) => state.products);

    const handleCreateActiveofferModel = () => {
        setIsActiveoffermodelOpen({
          createModel: !isActiveoffermodelOpen.createModel
        });
    }

    const handleUpdateActiveofferModel = () => {
        setIsActiveoffermodelOpen({
          updateModel: !isActiveoffermodelOpen.updateModel
        });
    }

    useEffect(() => {
        handleApiRequest();
    }, [])
    


    useEffect(() => {
        if(isactiveoffercreated) {
            handleApiRequest();
            dispatch({
                type: "productreducer/IsActiveofferCreated",
                payload: false,
            })
            reactToast("success", message);
        }
      }, [isactiveoffercreated]);

  return (
    <section>
    <div className="flex flex-wrap esm:flex-nowrap w-full py-1 items-end gap-2">
              <aside className="w-full">
              <Select
                  label={"Select Active Offers(Optional)"}
                  defaultText="Select Active Offers"
                  name="activeOffers"
                  value={formData.activeOffers}
                  handleChange={handleChange}
                  className="w-full px-2"
                  options={apiData?.activeoffers?.map((offers) => offers.name) || ["30% Off", "50% Off", "657be09fada690d387d51f7d"]}
                  idoptions={apiData?.activeoffers?.map((offers) => offers._id)}
                  multiple={false}
                />
              </aside>
              <aside className="w-full">
              <button
                  type="button"
                  onClick={handleCreateActiveofferModel}
                  className="px-4 w-full bg-blue-500 hover:bg-blue-900 text-white rounded-md h-8"
                >
                  Create Active Offers
                </button>
              </aside>
            </div>
            {
        isActiveoffermodelOpen.createModel && (
            <Createactiveoffermodel opendeletemodel={handleUpdateActiveofferModel} openupdatemodel={handleUpdateActiveofferModel} handleCreateActiveofferModel={handleCreateActiveofferModel}  />
        )
    }
    {
        isActiveoffermodelOpen.updateModel && (
            <Updateactiveoffermodel closeActiveofferModel={handleUpdateActiveofferModel} opencreateactiveoffermodel={handleCreateActiveofferModel} opendeleteactiveoffermodel={handleUpdateActiveofferModel}  />
        )
    }
            </section>
  )
}

export default Activeoffers;