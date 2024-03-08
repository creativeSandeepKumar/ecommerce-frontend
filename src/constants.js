// utilities/imageUtils.js (or any suitable location)
export const compressAndConvertToBase64 = (imageData) => {
  return new Promise((resolve) => {
    const maxWidth = 800; // Set your desired maximum width
    const maxHeight = 600; // Set your desired maximum height
    const maxSizeKB = 200; // Set your desired maximum file size in KB

    const img = new Image();
    img.src = imageData;

    img.onload = () => {
      let width = img.width;
      let height = img.height;

      if (width > maxWidth || height > maxHeight) {
        const aspectRatio = width / height;
        if (width > maxWidth) {
          width = maxWidth;
          height = width / aspectRatio;
        }
        if (height > maxHeight) {
          height = maxHeight;
          width = height * aspectRatio;
        }
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      // Convert the compressed image to a Blob
      canvas.toBlob(
        (blob) => {
          if (blob.size <= maxSizeKB * 1024) {
            // If the compressed image is smaller than or equal to 80KB,
            // convert it to base64 and resolve the Promise.
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
              const compressedImageBase64 = reader.result;
              resolve(compressedImageBase64);
            };
          } else {
            console.warn(
              `The image could not be compressed to ${maxSizeKB}KB. Current size: ${blob.size / 1024}KB`
            );
            resolve(imageData); // Return the original image data if compression fails.
          }
        },
        'image/jpeg',
        0.7 // Adjust the quality as needed
      );
    };
  });
};

export const compressImage = (imageData) => {
  return new Promise((resolve) => {
    const maxWidth = 800; // Set your desired maximum width
    const maxHeight = 600; // Set your desired maximum height
    const maxSizeKB = 200; // Set your desired maximum file size in KB

    const img = new Image();
    img.src = imageData;

    img.onload = () => {
      let width = img.width;
      let height = img.height;

      if (width > maxWidth || height > maxHeight) {
        const aspectRatio = width / height;
        if (width > maxWidth) {
          width = maxWidth;
          height = width / aspectRatio;
        }
        if (height > maxHeight) {
          height = maxHeight;
          width = height * aspectRatio;
        }
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      // Convert the compressed image to a Blob
      canvas.toBlob(
        (blob) => {
          if (blob.size <= maxSizeKB * 1024) {
            // If the compressed image is smaller than or equal to maxSizeKB,
            // resolve the Promise with the compressed image Blob.
            resolve(blob);
          } else {
            console.warn(
              `The image could not be compressed to ${maxSizeKB}KB. Current size: ${blob.size / 1024}KB`
            );
            resolve(blob); // Return the original image data if compression fails.
          }
        },
        'image/jpeg',
        0.7 // Adjust the quality as needed
      );
    };
  });
};

export const PhoneSlides = [
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/files/IM_201_Banner_MOB_600x.jpg?v=1706209224",
      itemindex: 1,
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/files/Ion_Banner_MOB_da0086f7-49e7-4667-ad7c-6ecd02ed7a83_600x.gif?v=1702972068",
      itemindex: 2,
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/files/161_Pro_Buds_Banner_MOB_1_600x.jpg?v=1704959022",
      itemindex: 3,
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/files/IM_111_Banner_MOB_600x.jpg?v=1705945982",
      itemindex: 4,
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/files/NEW_PB__Banner_MOB_1_600x.jpg?v=1704439251",
      itemindex: 5,
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/files/Without_Perzonalisation_MOB_Banner_1_600x.jpg?v=1703831371",
      itemindex: 6,
    },
  ];

export const DesktopSlides = [
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/files/IM_201_Banner_WEB_1440x.jpg?v=1706209224",
      itemindex: 1,
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/files/Ion_Banner_WEB_5fa902ce-7c71-4c80-873d-61c77012f7b5_1440x.gif?v=1702972067",
      itemindex: 2,
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/files/161_Pro_Buds_Banner_WEB_2_1440x.jpg?v=1706516508",
      itemindex: 3,
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/files/IM_111_Banner_WEB_1440x.jpg?v=1705945963",
      itemindex: 4,
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/files/NEW_PB__Banner_WEB_1440x.jpg?v=1704389434",
      itemindex: 5,
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/files/Without_Personalization_WEB_Banner_1_1440x.jpg?v=1703831371",
      itemindex: 6,
    },
  ];

  export const SidebarContent = [
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/collections/dropdown-TWS_100x.png?v=1684827062",
      text: "True Wireless Earbuds"
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/collections/Nirvana-ION-Black-_-1_-1.1_100x.png?v=1699269477",
      text: "Personalized products"
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/collections/Neckbands_06214c1a-5e30-48ea-ac14-4a6bff679f48_100x.png?v=1684828287",
      text: "Neckbands"
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/collections/smartwatches_100x.png?v=1684827668",
      text: "Smart Watches"
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/collections/Rectangle271_100x.png?v=1701414051",
      text: "Wireless Headphones"
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/collections/box-5_100x.png?v=1684827751",
      text: "Wireless Speakers"
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/collections/wiredheadphones_100x.webp?v=1705400196",
      text: "Wired Headphones"
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/collections/Wiredearphones_100x.webp?v=1705399424",
      text: "Wired Earphones"
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/collections/Collections_5baef8f1-a67a-40a5-a537-4258c6caae6a_100x.png?v=1684827849",
      text: "Soundbars"
    },
  ];

 export const ExpandMoreContent = [
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/collections/dropdown-TWS_100x.png?v=1684827062",
      text: "True Wireless Earbuds"
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/collections/Nirvana-ION-Black-_-1_-1.1_100x.png?v=1699269477",
      text: "Personalized products"
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/collections/Neckbands_06214c1a-5e30-48ea-ac14-4a6bff679f48_100x.png?v=1684828287",
      text: "Neckbands"
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/collections/smartwatches_100x.png?v=1684827668",
      text: "Smart Watches"
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/collections/Rectangle271_100x.png?v=1701414051",
      text: "Wireless Headphones"
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/collections/box-5_100x.png?v=1684827751",
      text: "Wireless Speakers"
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/collections/wiredheadphones_100x.webp?v=1705400196",
      text: "Wired Headphones"
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/collections/Wiredearphones_100x.webp?v=1705399424",
      text: "Wired Earphones"
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/collections/Collections_5baef8f1-a67a-40a5-a537-4258c6caae6a_100x.png?v=1684827849",
      text: "Soundbars"
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/collections/dropdown-TWS_100x.png?v=1684827062",
      text: "True Wireless Earbuds"
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/collections/Nirvana-ION-Black-_-1_-1.1_100x.png?v=1699269477",
      text: "Personalized products"
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/collections/Neckbands_06214c1a-5e30-48ea-ac14-4a6bff679f48_100x.png?v=1684828287",
      text: "Neckbands"
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/collections/smartwatches_100x.png?v=1684827668",
      text: "Smart Watches"
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/collections/Rectangle271_100x.png?v=1701414051",
      text: "Wireless Headphones"
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/collections/box-5_100x.png?v=1684827751",
      text: "Wireless Speakers"
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/collections/wiredheadphones_100x.webp?v=1705400196",
      text: "Wired Headphones"
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/collections/Wiredearphones_100x.webp?v=1705399424",
      text: "Wired Earphones"
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/collections/Collections_5baef8f1-a67a-40a5-a537-4258c6caae6a_100x.png?v=1684827849",
      text: "Soundbars"
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/collections/dropdown-TWS_100x.png?v=1684827062",
      text: "True Wireless Earbuds"
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/collections/Nirvana-ION-Black-_-1_-1.1_100x.png?v=1699269477",
      text: "Personalized products"
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/collections/Neckbands_06214c1a-5e30-48ea-ac14-4a6bff679f48_100x.png?v=1684828287",
      text: "Neckbands"
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/collections/smartwatches_100x.png?v=1684827668",
      text: "Smart Watches"
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/collections/Rectangle271_100x.png?v=1701414051",
      text: "Wireless Headphones"
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/collections/box-5_100x.png?v=1684827751",
      text: "Wireless Speakers"
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/collections/wiredheadphones_100x.webp?v=1705400196",
      text: "Wired Headphones"
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/collections/Wiredearphones_100x.webp?v=1705399424",
      text: "Wired Earphones"
    },
    {
      images: "https://www.boat-lifestyle.com/cdn/shop/collections/Collections_5baef8f1-a67a-40a5-a537-4258c6caae6a_100x.png?v=1684827849",
      text: "Soundbars"
    },
  ];

  export const MoreNavContent = [
    {
      name: "Daily Sales",
      url: "#",
    },
    {
      name: "Do what floats your boat",
      url: "#",
    },
    {
      name: "Blogs",
      url: "#",
    },
    {
      name: "Earb 100 rupee",
      url: "#",
    },
    {
      name: "Career",
      url: "#",
    },
    {
      name: "Social Responsibilty",
      url: "#",
    },
    {
      name: "Store Locator",
      url: "#",
    },
  ];

 export const NavItems = [
    {
      name: "boAt Personalization",
      url: "#",
    },
    {
      name: "gift With boAt",
      url: "#",
    },
    {
      name: "Corporate Orders",
      url: "#",
    },
    {
      name: "Account",
      url: "#",
    },
    {
      name: "Track Your Order",
      url: "#",
    },
  ];

export const desktopNavItems = [
  {
    name: "boAt Personalization",
    url: "/dashboard",
  },
  {
    name: "gift With boAt",
    url: "#",
  },
  {
    name: "Corporate Orders",
    url: "#",
  },
  ]

  const RequestTypeEnum = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE",
  };
  
  const AvailableRequestType = Object.values(RequestTypeEnum);
  
  const UserRolesEnum = {
    USER: "USER",
    TEACHER: "TEACHER",
    STUDENT: "STUDENT",
    ADMIN: "ADMIN",
    BLOGGER: "BLOGGER",
  };
  
  const AvailableUserRoles = Object.values(UserRolesEnum);
  
  const ValidateUserRoles = (userrole) => {
    const isValidUserRole = {
      User: false,
      Teacher: false,
      Student: false,
      Admin: false,
      Blogger: false,
    };
  
    if (AvailableUserRoles.includes(userrole)) {
      switch (userrole) {
        case UserRolesEnum.USER:
          isValidUserRole.User = true;
          break;
        case UserRolesEnum.STUDENT:
          isValidUserRole.Student = true;
          break;
        case UserRolesEnum.TEACHER:
          isValidUserRole.Teacher = true;
          break;
        case UserRolesEnum.BLOGGER:
          isValidUserRole.Blogger = true;
          break;
        case UserRolesEnum.ADMIN:
          isValidUserRole.Admin = true;
          break;
      }
    }
  
    return {
      validUser: isValidUserRole.User,
      validStudent: isValidUserRole.Student,
      validTeacher: isValidUserRole.Teacher,
      validBlogger: isValidUserRole.Blogger,
      validAdmin: isValidUserRole.Admin,
    };
  };
  
  const BlogStatusEnum = {
    All: "ALL",
    DRAFT: "DRAFT",
    UNDERREVIEW: "UNDERREVIEW",
    PUBLISHED: "PUBLISHED",
  };
  
  const AvailableBlogStatus = Object.values(BlogStatusEnum);
  
  export {
    RequestTypeEnum,
    AvailableRequestType,
    UserRolesEnum,
    AvailableUserRoles,
    ValidateUserRoles,
    BlogStatusEnum,
    AvailableBlogStatus,
  };
  