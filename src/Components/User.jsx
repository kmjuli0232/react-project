import React from "react";
// const User = (props)=>{
//     console.log(props);
//     return(
//         <h1>{props.name}</h1>
//     );
// }

// add data informal parameter
// const User = (data)=>{
//     console.log(data);
//     return(
//         <h1>{data.name}</h1>
//     );
// }

// parmanent parameter

// const User = ({name,age})=>{
//     console.log(name);
//     return (
//       <>
//         <h1>{name}</h1>
//         <h1>{age}</h1>

//       </>
//     );
// }

// obj component
// const User = ({ user, user2 }) => {
//    console.log(user,user2);
//   return (
//     <>
//       <h1>{user.name}</h1>
//       <h1>{user.age}</h1>
//       <h1>{user2.name}</h1>
//       <h1>{user2.age}</h1>

//     </>
//   );
// };

// Array comonent

const User = ({ arr }) => {
  return (
    <>
      <h1>{arr.join(", ")}</h1>
    </>
  );
};

export default User;
