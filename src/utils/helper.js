import { toast } from "react-toastify";

export const constructFullUrl = (baseurl, relativeUrl) => {
  // Construct full URL using environment variables or similar mechanism
  // for dynamic configuration at runtime

  return `${baseurl}${relativeUrl}`;
};

  export const reactToast = (messageType, message) => {
    let statuscode;
    if(messageType === "success") {
      toast.success(message)
     }
     if(messageType === "error" && statuscode === 409) {
      toast.error(message)
    } else if(messageType === "error" && message) {
        toast.error(message)
    } else if(messageType === "error") {
      toast.error("Something went wrong, Please try again!")
    }
   }


   export const checkStatusCodeRange = (statusCode, range1, range2) => {
          if(statusCode >= range1 &&  statusCode <= range2) {
            return true;
          } else {
            return false;
          }
   }

  //  handlescroll - used to fixed left side untill end right-side scrolling
export const handleScroll = (leftAsideRef, rightAsideRef) => {
    const leftAside = leftAsideRef.current;
    const rightAside = rightAsideRef.current;

    if (leftAside && rightAside) {
      const leftAsideHeight = leftAside.offsetHeight;
      const rightAsideHeight = rightAside.offsetHeight;
      const rightAsideOffsetTop = rightAside.offsetTop;

      const isRightAsideScrollable = rightAsideHeight > window.innerHeight;

      if (isRightAsideScrollable) {
        const scrollTop = window.scrollY;

        if (scrollTop >= rightAsideOffsetTop) {
          const bottomOffset = rightAsideHeight - window.innerHeight;

          if (scrollTop >= rightAsideOffsetTop + bottomOffset) {
            leftAside.style.position = 'absolute';
            leftAside.style.bottom = '0';
            leftAside.style.top = '40%';
            leftAside.style.width = '100%';
          } else {
            leftAside.style.position = 'fixed';
            leftAside.style.bottom = 'auto';
            leftAside.style.top = '0';
            leftAside.style.width = '50%';
          }
        } else {
          leftAside.style.position = 'static';
          leftAside.style.left = '0';
          leftAside.style.width = '100%';
        }
      }
    }
  };

  export const formatDate = (isoTimestamp) => {
    var date = new Date(isoTimestamp);

    // Array of month names
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    var formattedDate = monthNames[date.getMonth()] + " " + (date.getDate() < 10 ? '0' : '') + date.getDate() + ", " + date.getFullYear();

    return formattedDate;
}
  
  
  
  
  
  